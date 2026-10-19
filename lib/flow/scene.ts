// Three.js-Szene „Ein Ablauf, der von selbst läuft“ für den Kopf der Seite /ki-beratung.
// Karten für die Schritte eines Ablaufs, dazwischen Leitungen, auf denen Datenpunkte wandern.
// Wird erst nach dem ersten Rendern dynamisch geladen (siehe components/flow/flow-hero.tsx).

import {
  CanvasTexture,
  CatmullRomCurve3,
  CurvePath,
  Group,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  SRGBColorSpace,
  Scene,
  SphereGeometry,
  TubeGeometry,
  Vector3,
  WebGLRenderer,
} from 'three';
import type { Material, Object3D } from 'three';
import { readPalette } from '@/lib/week/textures';
import type { ScenePalette } from '@/lib/week/textures';

export interface FlowStep {
  label: string;
  /** Hervorgehobener Schritt, z. B. die Freigabe durch den Menschen. */
  highlight?: boolean;
}

export interface FlowScene {
  /** Scrollfortschritt 0–1 dreht die Szene leicht. */
  setProgress: (progress: number) => void;
  /** Mausposition relativ zur Bildschirmmitte, je -1 bis 1. */
  setPointer: (x: number, y: number) => void;
  start: () => void;
  stop: () => void;
  dispose: () => void;
}

// Maße in Szeneneinheiten
const CARD_W = 1.55;
const CARD_H = 0.62;
const SLAB_DEPTH = 0.07;
const PX_PER_UNIT = 480;
const TUBE_RADIUS = 0.012;
const PACKET_RADIUS = 0.05;
const GLOW_RADIUS = 0.11;
// Zickzack von oben nach unten, leicht in die Tiefe versetzt
const LAYOUT: readonly [number, number, number][] = [
  [-0.75, 2, 0],
  [0.75, 1, 0.2],
  [-0.7, 0, 0.05],
  [0.8, -1, 0.25],
  [-0.6, -2, 0],
];
// Leitungen setzen so weit innen an der Kartenkante an und laufen leicht hinter der Karte
const EDGE_INSET = 0.35;
const LINE_DEPTH = -0.03;
const TANGENT = 0.18;
const VISIBLE_HEIGHT = 5.4;
const VISIBLE_WIDTH = 4.4;
const FOV = 30;
const BASE_ROT = { x: -0.1, y: -0.32 };
const MAX_TILT = MathUtils.degToRad(5);
const SCROLL_TURN = 0.35;
const TILT_LERP = 0.06;
// Datenpunkte: so viele gleichzeitig unterwegs, so lange für den ganzen Weg
const PACKETS = 3;
const LOOP_SECONDS = 7;
const PULSE_SCALE = 0.07;
const PULSE_WIDTH = 0.035;
const SIDE_COLOR = '#DCDCE1';

async function waitForFonts(): Promise<void> {
  if (document.fonts?.ready) await document.fonts.ready;
}

function cardTexture(step: FlowStep, index: number, p: ScenePalette, anisotropy: number): CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(CARD_W * PX_PER_UNIT);
  canvas.height = Math.round(CARD_H * PX_PER_UNIT);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context nicht verfügbar');

  const fill = step.highlight ? p.brand : p.bg;
  const text = step.highlight ? '#FFFFFF' : p.text;
  const muted = step.highlight ? 'rgba(255,255,255,0.75)' : p.textMuted;
  const pad = canvas.height * 0.22;

  ctx.beginPath();
  ctx.roundRect(3, 3, canvas.width - 6, canvas.height - 6, canvas.height * 0.18);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = step.highlight ? p.brand : p.line;
  ctx.stroke();

  ctx.textBaseline = 'middle';
  ctx.font = `600 ${Math.round(canvas.height * 0.2)}px ${p.fontSans}`;
  ctx.fillStyle = muted;
  ctx.fillText(String(index + 1).padStart(2, '0'), pad, canvas.height / 2);
  const labelX = pad + canvas.height * 0.48;
  ctx.font = `600 ${Math.round(canvas.height * 0.24)}px ${p.fontSans}`;
  ctx.fillStyle = text;
  // maxWidth staucht zu lange Beschriftungen, statt sie an der Kartenkante abzuschneiden
  ctx.fillText(step.label, labelX, canvas.height / 2, canvas.width - labelX - pad);

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = anisotropy;
  return texture;
}

function buildCard(step: FlowStep, index: number, p: ScenePalette, anisotropy: number): Group {
  const card = new Group();
  card.position.set(...LAYOUT[index % LAYOUT.length]);
  const face = new Mesh(
    new PlaneGeometry(CARD_W, CARD_H),
    new MeshBasicMaterial({ map: cardTexture(step, index, p, anisotropy), transparent: true }),
  );
  // Seitenwand als leicht versetzte, etwas kleinere Platte: wirkt wie eine Karte mit Dicke.
  const slab = new Mesh(new PlaneGeometry(CARD_W * 0.97, CARD_H * 0.9), new MeshBasicMaterial({ color: SIDE_COLOR }));
  slab.position.set(SLAB_DEPTH * 0.6, -SLAB_DEPTH, -SLAB_DEPTH);
  card.add(slab, face);
  return card;
}

/** Leitung von der Unterkante einer Karte zur Oberkante der nächsten, als weiches S. */
function connection(from: Vector3, to: Vector3): CatmullRomCurve3 {
  const side = Math.sign(to.x - from.x) || 1;
  const start = from.clone().add(new Vector3(side * EDGE_INSET, -CARD_H / 2, LINE_DEPTH));
  const end = to.clone().add(new Vector3(-side * EDGE_INSET, CARD_H / 2, LINE_DEPTH));
  return new CatmullRomCurve3([
    start,
    start.clone().add(new Vector3(0, -TANGENT, 0)),
    end.clone().add(new Vector3(0, TANGENT, 0)),
    end,
  ]);
}

function disposeTree(root: Object3D): void {
  root.traverse((object) => {
    if (!(object instanceof Mesh)) return;
    object.geometry.dispose();
    const materials: Material[] = Array.isArray(object.material) ? object.material : [object.material];
    materials.forEach((material) => {
      if (material instanceof MeshBasicMaterial) material.map?.dispose();
      material.dispose();
    });
  });
}

export async function createFlowScene(host: HTMLElement, steps: readonly FlowStep[], onContextLost: () => void): Promise<FlowScene> {
  const palette = readPalette();
  await waitForFonts();

  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  const anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  canvas.className = 'flow-hero__canvas';
  host.appendChild(canvas);
  const handleContextLost = (event: Event) => {
    event.preventDefault();
    onContextLost();
  };
  canvas.addEventListener('webglcontextlost', handleContextLost);

  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1, 0.1, 100);
  const board = new Group();
  board.rotation.set(BASE_ROT.x, BASE_ROT.y, 0);
  scene.add(board);

  const cards = steps.map((step, index) => buildCard(step, index, palette, anisotropy));
  const centers = cards.map((card) => card.position.clone());
  const path = new CurvePath<Vector3>();
  const lineMaterial = new MeshBasicMaterial({ color: palette.textMuted, transparent: true, opacity: 0.35 });
  for (let i = 0; i < centers.length - 1; i += 1) {
    const curve = connection(centers[i], centers[i + 1]);
    path.add(curve);
    board.add(new Mesh(new TubeGeometry(curve, 48, TUBE_RADIUS, 6, false), lineMaterial));
  }
  cards.forEach((card) => board.add(card));

  // Anteil des Gesamtwegs, an dem ein Datenpunkt die jeweilige Karte erreicht
  const segmentLengths = path.getCurveLengths();
  const total = segmentLengths.at(-1) ?? 1;
  const stops = [0, ...segmentLengths.map((length) => length / total)];

  const packets = Array.from({ length: PACKETS }, () => {
    const dot = new Mesh(new SphereGeometry(PACKET_RADIUS, 16, 12), new MeshBasicMaterial({ color: palette.brand }));
    const glow = new Mesh(
      new SphereGeometry(GLOW_RADIUS, 16, 12),
      new MeshBasicMaterial({ color: palette.brand, transparent: true, opacity: 0.18, depthWrite: false }),
    );
    dot.add(glow);
    board.add(dot);
    return dot;
  });

  const tilt = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let scrollTurn = 0;
  let frame = 0;
  let running = false;
  const startedAt = performance.now();

  const resize = () => {
    const width = host.clientWidth || 1;
    const height = host.clientHeight || 1;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    const halfFov = MathUtils.degToRad(FOV / 2);
    const distanceForHeight = VISIBLE_HEIGHT / 2 / Math.tan(halfFov);
    const distanceForWidth = VISIBLE_WIDTH / 2 / (Math.tan(halfFov) * camera.aspect);
    camera.position.set(0, 0, Math.max(distanceForHeight, distanceForWidth));
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    if (!running) renderer.render(scene, camera);
  };
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);

  const packetProgress = (seconds: number, i: number) => (seconds / LOOP_SECONDS + i / PACKETS) % 1;

  const update = (seconds: number) => {
    const progress = packets.map((_packet, i) => packetProgress(seconds, i));
    packets.forEach((packet, i) => packet.position.copy(path.getPointAt(progress[i])));
    // Karte pulsiert kurz, wenn ein Datenpunkt ankommt
    cards.forEach((card, index) => {
      const near = Math.min(...progress.map((t) => Math.abs(t - stops[index])));
      card.scale.setScalar(1 + PULSE_SCALE * Math.exp(-((near / PULSE_WIDTH) ** 2)));
    });
    tilt.x += (tilt.targetX - tilt.x) * TILT_LERP;
    tilt.y += (tilt.targetY - tilt.y) * TILT_LERP;
    board.rotation.set(BASE_ROT.x + tilt.x, BASE_ROT.y + tilt.y + scrollTurn, 0);
  };

  const render = () => renderer.render(scene, camera);
  const tick = () => {
    update((performance.now() - startedAt) / 1000);
    render();
    frame = requestAnimationFrame(tick);
  };

  resize();
  update(0);
  render();

  return {
    setProgress(progress) {
      scrollTurn = progress * SCROLL_TURN;
      if (!running) {
        update(0);
        render();
      }
    },
    setPointer(x, y) {
      tilt.targetY = x * MAX_TILT;
      tilt.targetX = y * MAX_TILT;
    },
    start() {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(tick);
    },
    stop() {
      running = false;
      cancelAnimationFrame(frame);
    },
    dispose() {
      running = false;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      disposeTree(scene);
      renderer.dispose();
      canvas.remove();
    },
  };
}
