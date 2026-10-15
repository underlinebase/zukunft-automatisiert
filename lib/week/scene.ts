// Three.js-Szene „Die Woche, die leerer wird“.
// Wird erst nach dem ersten Rendern dynamisch geladen (siehe components/week/week-hero.tsx).

import {
  BoxGeometry,
  BufferGeometry,
  DirectionalLight,
  EdgesGeometry,
  Group,
  Line,
  LineBasicMaterial,
  LineSegments,
  Material,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PCFShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  ShadowMaterial,
  Texture,
  Vector3,
  WebGLRenderer,
} from 'three';
import { AFTERNOON_FIRST_SLOT, DAY_NAMES, FREED_LABEL, FRIDAY, SLOTS_PER_DAY, blockStateAt, freedStateAt } from './model';
import type { PlacedBlock } from './model';
import { blockTexture, checkTexture, freedTexture, headerTexture, readPalette } from './textures';
import type { ScenePalette } from './textures';

// Maße in Szeneneinheiten
const COL_W = 1;
const COL_GAP = 0.14;
const COL_D = 0.06;
const PAD = 0.1;
const HEADER_H = 0.4;
const SLOT_H = 0.6;
const SLOT_GAP = 0.09;
const BLOCK_W = COL_W - 2 * PAD;
const BLOCK_D = 0.05;
const CHECK_SIZE = 0.2;
const COL_H = 2 * PAD + HEADER_H + SLOTS_PER_DAY * SLOT_H + (SLOTS_PER_DAY - 1) * SLOT_GAP;
const BOARD_W = 5 * COL_W + 4 * COL_GAP;

// Haltung des Kalenders: leicht nach hinten gelegt und zum Text gedreht.
const BASE_ROT = { x: -0.5, y: 0.3, z: 0.05 };
const MAX_TILT = MathUtils.degToRad(3.5);
const TILT_LERP = 0.08;
// Werte aus dem Claude-Design-Entwurf „Startseite v2“: Block kippt um rund 77° weg, Häkchen federt leicht nach.
const LEAVE_ROTATION = 1.35;
const CHECK_OVERSHOOT = 1.9;
const FOV = 24;
const SIDE_COLOR = '#DCDCE1';
const SHADOW_OPACITY_GROUND = 0.07;
const SHADOW_OPACITY_COLUMN = 0.1;

export interface WeekScene {
  setProgress: (progress: number) => void;
  dispose: () => void;
}

interface BlockRig {
  pivot: Group;
  materials: MeshBasicMaterial[];
  check: Mesh<PlaneGeometry, MeshBasicMaterial>;
  order: number;
  home: Vector3;
}

const colX = (day: number) => -BOARD_W / 2 + COL_W / 2 + day * (COL_W + COL_GAP);
const slotY = (slot: number) => COL_H / 2 - PAD - HEADER_H - slot * (SLOT_H + SLOT_GAP) - SLOT_H / 2;

function buildColumn(day: number, palette: ScenePalette, anisotropy: number): Group {
  const column = new Group();
  column.position.set(colX(day), 0, 0);

  const body = new Mesh(
    new BoxGeometry(COL_W, COL_H, COL_D),
    [
      ...Array.from({ length: 4 }, () => new MeshBasicMaterial({ color: SIDE_COLOR })),
      new MeshBasicMaterial({ color: palette.bg }),
      new MeshBasicMaterial({ color: SIDE_COLOR }),
    ],
  );
  body.castShadow = true;
  column.add(body);

  const shadowFace = new Mesh(new PlaneGeometry(COL_W, COL_H), new ShadowMaterial({ opacity: SHADOW_OPACITY_COLUMN }));
  shadowFace.position.z = COL_D / 2 + 0.001;
  shadowFace.receiveShadow = true;
  column.add(shadowFace);

  const lineMaterial = new LineBasicMaterial({ color: palette.line });
  const outline = new LineSegments(new EdgesGeometry(new PlaneGeometry(COL_W, COL_H)), lineMaterial);
  outline.position.z = COL_D / 2 + 0.002;
  column.add(outline);

  const separatorY = COL_H / 2 - PAD - HEADER_H + 0.03;
  const separator = new Line(
    new BufferGeometry().setFromPoints([
      new Vector3(-COL_W / 2 + PAD, separatorY, COL_D / 2 + 0.002),
      new Vector3(COL_W / 2 - PAD, separatorY, COL_D / 2 + 0.002),
    ]),
    lineMaterial,
  );
  column.add(separator);

  const header = new Mesh(
    new PlaneGeometry(COL_W, HEADER_H),
    new MeshBasicMaterial({ map: headerTexture(DAY_NAMES[day], COL_W, HEADER_H, palette, anisotropy), transparent: true }),
  );
  header.position.set(0, COL_H / 2 - PAD - HEADER_H / 2, COL_D / 2 + 0.003);
  column.add(header);

  return column;
}

function buildBlock(block: PlacedBlock, palette: ScenePalette, anisotropy: number, checkMap: Texture): BlockRig {
  const front = new MeshBasicMaterial({ map: blockTexture(block.label, BLOCK_W, SLOT_H, palette, anisotropy), transparent: true });
  const sides = Array.from({ length: 5 }, () => new MeshBasicMaterial({ color: SIDE_COLOR, transparent: true }));
  const materials = [sides[0], sides[1], sides[2], sides[3], front, sides[4]];

  const mesh = new Mesh(new BoxGeometry(BLOCK_W, SLOT_H, BLOCK_D), materials);
  mesh.castShadow = true;

  const check = new Mesh(new PlaneGeometry(CHECK_SIZE, CHECK_SIZE), new MeshBasicMaterial({ map: checkMap, transparent: true }));
  check.position.set(BLOCK_W / 2 - CHECK_SIZE * 0.8, SLOT_H / 2 - CHECK_SIZE * 0.8, BLOCK_D / 2 + 0.004);
  check.scale.setScalar(0.0001);

  const pivot = new Group();
  const home = new Vector3(colX(block.day), slotY(block.slot), COL_D / 2 + BLOCK_D / 2 + 0.004);
  pivot.position.copy(home);
  pivot.add(mesh, check);

  return { pivot, materials, check, order: block.order, home };
}

function buildFreedSlot(palette: ScenePalette, anisotropy: number): Mesh<PlaneGeometry, MeshBasicMaterial> {
  const height = 2 * SLOT_H + SLOT_GAP;
  const mesh = new Mesh(
    new PlaneGeometry(BLOCK_W, height),
    new MeshBasicMaterial({ map: freedTexture(FREED_LABEL, BLOCK_W, height, palette, anisotropy), transparent: true, opacity: 0 }),
  );
  const centerY = (slotY(AFTERNOON_FIRST_SLOT) + slotY(SLOTS_PER_DAY - 1)) / 2;
  mesh.position.set(colX(FRIDAY), centerY, COL_D / 2 + 0.003);
  return mesh;
}

function backOut(t: number): number {
  const s = CHECK_OVERSHOOT;
  const x = t - 1;
  return 1 + (s + 1) * x * x * x + s * x * x;
}

function disposeTree(root: Object3D) {
  root.traverse((node) => {
    const mesh = node as Mesh;
    if (mesh.geometry) mesh.geometry.dispose();
    const material = mesh.material as Material | Material[] | undefined;
    const list = Array.isArray(material) ? material : material ? [material] : [];
    list.forEach((m) => {
      const map = (m as MeshBasicMaterial).map;
      if (map) map.dispose();
      m.dispose();
    });
  });
}

async function waitForFonts(palette: ScenePalette) {
  try {
    await Promise.all([
      document.fonts.load(`600 40px ${palette.fontSans}`),
      document.fonts.load(`600 40px ${palette.fontSerif}`),
    ]);
  } catch {
    // Ohne geladene Schrift zeichnet der Canvas mit der Fallback-Schrift. Kein Abbruch nötig.
  }
}

/**
 * Baut die Szene. `onContextLost` wird aufgerufen, wenn der Browser den GPU-Kontext entzieht;
 * die aufrufende Komponente schaltet dann auf die flache Ansicht zurück.
 */
export async function createWeekScene(host: HTMLElement, blocks: PlacedBlock[], onContextLost: () => void): Promise<WeekScene> {
  const palette = readPalette();
  await waitForFonts(palette);

  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  try {
    return buildScene(renderer, host, blocks, palette, onContextLost);
  } catch (error: unknown) {
    renderer.forceContextLoss();
    renderer.dispose();
    renderer.domElement.remove();
    throw error;
  }
}

function buildScene(
  renderer: WebGLRenderer,
  host: HTMLElement,
  blocks: PlacedBlock[],
  palette: ScenePalette,
  onContextLost: () => void,
): WeekScene {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  const anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());

  const canvas = renderer.domElement;
  canvas.setAttribute('aria-hidden', 'true');
  canvas.className = 'week-3d__canvas';
  host.appendChild(canvas);
  const handleContextLost = (event: Event) => {
    event.preventDefault();
    onContextLost();
  };
  canvas.addEventListener('webglcontextlost', handleContextLost);

  const scene = new Scene();
  const camera = new PerspectiveCamera(FOV, 1, 0.1, 100);

  const light = new DirectionalLight(0xffffff, 1);
  light.position.set(-5, 7, 9);
  light.castShadow = true;
  light.shadow.mapSize.set(1024, 1024);
  light.shadow.camera.left = -5;
  light.shadow.camera.right = 5;
  light.shadow.camera.top = 5;
  light.shadow.camera.bottom = -5;
  light.shadow.radius = 4;
  scene.add(light);

  const tiltRoot = new Group();
  const board = new Group();
  board.rotation.set(BASE_ROT.x, BASE_ROT.y, BASE_ROT.z);
  tiltRoot.add(board);
  scene.add(tiltRoot);

  const ground = new Mesh(new PlaneGeometry(16, 12), new ShadowMaterial({ opacity: SHADOW_OPACITY_GROUND }));
  ground.position.z = -COL_D / 2 - 0.02;
  ground.receiveShadow = true;
  board.add(ground);

  for (let day = 0; day < DAY_NAMES.length; day += 1) board.add(buildColumn(day, palette, anisotropy));

  const checkMap = checkTexture(palette, anisotropy);
  const rigs = blocks.map((block) => buildBlock(block, palette, anisotropy, checkMap));
  rigs.forEach((rig) => board.add(rig.pivot));
  const freed = buildFreedSlot(palette, anisotropy);
  board.add(freed);

  let progress = 0;
  let dirty = true;
  let visible = false;
  let raf = 0;
  const tilt = { x: 0, y: 0, tx: 0, ty: 0 };

  const applyProgress = () => {
    rigs.forEach((rig) => {
      const { check, leave } = blockStateAt(progress, rig.order, rigs.length);
      rig.check.scale.setScalar(Math.max(0.0001, backOut(check)));
      rig.pivot.position.set(rig.home.x, rig.home.y + leave * 0.35, rig.home.z + leave * 0.55);
      rig.pivot.rotation.x = -leave * LEAVE_ROTATION;
      const opacity = 1 - leave;
      rig.materials.forEach((m) => { m.opacity = opacity; });
      rig.check.material.opacity = opacity;
      rig.pivot.visible = opacity > 0.01;
    });
    freed.material.opacity = freedStateAt(progress);
  };

  const fitCamera = () => {
    const width = host.clientWidth || 1;
    const height = host.clientHeight || 1;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    const halfFov = Math.tan(MathUtils.degToRad(FOV / 2));
    const distW = (BOARD_W * 0.56) / (halfFov * camera.aspect);
    const distH = (COL_H * 0.6) / halfFov;
    camera.position.set(0, 0, Math.max(distW, distH));
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
    dirty = true;
  };

  const frame = () => {
    raf = requestAnimationFrame(frame);
    const dx = tilt.tx - tilt.x;
    const dy = tilt.ty - tilt.y;
    const moving = Math.abs(dx) > 0.00005 || Math.abs(dy) > 0.00005;
    if (moving) {
      tilt.x += dx * TILT_LERP;
      tilt.y += dy * TILT_LERP;
      tiltRoot.rotation.set(tilt.x, tilt.y, 0);
    }
    if (!moving && !dirty) return;
    if (dirty) applyProgress();
    dirty = false;
    renderer.render(scene, camera);
  };

  const start = () => { if (!raf) raf = requestAnimationFrame(frame); };
  const stop = () => { cancelAnimationFrame(raf); raf = 0; };

  const onPointer = (event: PointerEvent) => {
    const rect = host.getBoundingClientRect();
    const nx = (event.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2);
    const ny = (event.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2);
    tilt.ty = MathUtils.clamp(nx, -1, 1) * MAX_TILT;
    tilt.tx = MathUtils.clamp(ny, -1, 1) * MAX_TILT;
  };

  const resizeObserver = new ResizeObserver(fitCamera);
  resizeObserver.observe(host);
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
    else stop();
  });
  visibilityObserver.observe(host);
  window.addEventListener('pointermove', onPointer, { passive: true });

  fitCamera();
  applyProgress();
  renderer.render(scene, camera);

  return {
    setProgress(next: number) {
      if (next === progress) return;
      progress = next;
      dirty = true;
      if (visible) start();
    },
    dispose() {
      stop();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener('pointermove', onPointer);
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      disposeTree(scene);
      checkMap.dispose();
      // Kontext aktiv freigeben, sonst sammeln sich bei Breakpoint-Wechseln WebGL-Kontexte an.
      renderer.forceContextLoss();
      renderer.dispose();
      canvas.remove();
    },
  };
}
