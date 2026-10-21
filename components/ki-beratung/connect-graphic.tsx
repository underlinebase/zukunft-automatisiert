'use client';

import { useRef } from 'react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useMotion } from '@/lib/motion/use-motion';

export interface ConnectContent {
  label: string;
  sourcesTitle: string;
  targetsTitle: string;
  sources: readonly string[];
  targets: readonly string[];
  hub: string;
  hubNote: string;
  tool: string;
  ki: string;
  caption: string;
}

interface ConnectGraphicProps {
  content: ConnectContent;
}

// Maße im viewBox-Raster (460 × 540)
const VIEW_W = 460;
const VIEW_H = 540;
const COLUMNS = [78, 230, 382];
const NODE_W = 136;
const NODE_H = 44;
const SOURCE_Y = 34;
const TARGET_Y = 462;
const HUB = { x: 130, y: 228, w: 200, h: 84 };
/** Wo die Wege oben in den Ablauf hinein- und unten wieder herausgehen. */
const HUB_PORTS = [175, 230, 285];
const CURVE = 82;
const CHIP = { w: 112, h: 30, gap: 10 };

// Bewegung: Dauer eines Wegs von oben nach unten, Abstand zwischen den Wegen, Pause danach
const TRAVEL_SECONDS = 3.2;
const ROUTE_OFFSET = TRAVEL_SECONDS / 3;
const REST_SECONDS = 0.8;

/** Ein Weg je Spalte: Quelle → Ablauf → Ziel. Der Teil im Ablauf liegt hinter dem Kasten. */
function routePath(index: number): string {
  const x = COLUMNS[index];
  const port = HUB_PORTS[index];
  const sourceBottom = SOURCE_Y + NODE_H;
  const hubBottom = HUB.y + HUB.h;
  return [
    `M ${x} ${sourceBottom}`,
    `C ${x} ${sourceBottom + CURVE}, ${port} ${HUB.y - CURVE}, ${port} ${HUB.y}`,
    `L ${port} ${hubBottom}`,
    `C ${port} ${hubBottom + CURVE}, ${x} ${TARGET_Y - CURVE}, ${x} ${TARGET_Y}`,
  ].join(' ');
}

interface NodeProps {
  x: number;
  y: number;
  text: string;
  className: string;
}

function Node({ x, y, text, className }: NodeProps) {
  return (
    <g className={`connect__node ${className}`}>
      <rect x={x - NODE_W / 2} y={y} width={NODE_W} height={NODE_H} rx={6} />
      <text x={x} y={y + NODE_H / 2}>{text}</text>
    </g>
  );
}

interface ChipProps {
  x: number;
  text: string;
  className: string;
}

function Chip({ x, text, className }: ChipProps) {
  const y = HUB.y + HUB.h / 2 - CHIP.h / 2;
  return (
    <g className={`connect__chip ${className}`}>
      <rect x={x} y={y} width={CHIP.w} height={CHIP.h} rx={CHIP.h / 2} />
      <text x={x + CHIP.w / 2} y={y + CHIP.h / 2}>{text}</text>
    </g>
  );
}

/**
 * Grafik neben „Was ich als KI-Berater für Sie mache“: Was hereinkommt, läuft durch einen Ablauf
 * und landet in den Programmen, die schon da sind. Beim ersten Sichtkontakt zeichnen sich die Wege,
 * danach wandern ruhig Datenpunkte, solange die Grafik im Bild ist.
 * Ohne JavaScript oder bei „Bewegung reduzieren“ steht die Grafik fertig da, ohne Datenpunkte.
 */
export default function ConnectGraphic({ content }: ConnectGraphicProps) {
  const ref = useRef<HTMLElement>(null);

  useMotion(ref, ({ gsap, ScrollTrigger }) => {
    const root = ref.current;
    if (!root) return undefined;
    gsap.registerPlugin(MotionPathPlugin);
    const q = gsap.utils.selector(root);
    const lines = Array.from(root.querySelectorAll<SVGPathElement>('.connect__line'));
    const targets = q('.connect__node--target');

    const loop = gsap.timeline({ paused: true });
    q('.connect__dot').forEach((dot, index) => {
      const route = gsap.timeline({ repeat: -1, repeatDelay: REST_SECONDS, delay: index * ROUTE_OFFSET });
      route
        .set(dot, { autoAlpha: 1 })
        .to(dot, {
          duration: TRAVEL_SECONDS,
          ease: 'power1.inOut',
          motionPath: { path: lines[index], align: lines[index], alignOrigin: [0.5, 0.5] },
        })
        .set(dot, { autoAlpha: 0 })
        // Das Ziel leuchtet kurz auf, wenn der Datenpunkt ankommt.
        .fromTo(targets[index], { '--arrive': 1 }, { '--arrive': 0, duration: 0.8, ease: 'power2.out' }, '<');
      loop.add(route, 0);
    });

    let introDone = false;
    let inView = false;
    const sync = () => {
      if (introDone && inView) loop.play();
      else loop.pause();
    };

    const intro = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: { trigger: root, start: 'top 75%', once: true },
      onComplete: () => {
        introDone = true;
        sync();
      },
    });
    intro
      .from(q('.connect__heading--top, .connect__node--source'), { autoAlpha: 0, y: -10, duration: 0.45, stagger: 0.08 })
      .fromTo(lines, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1, ease: 'power1.inOut', stagger: 0.12 }, '-=0.1')
      .from(q('.connect__hub'), { autoAlpha: 0, scale: 0.92, transformOrigin: '50% 50%', duration: 0.5 }, '-=0.7')
      .from(q('.connect__chip'), { autoAlpha: 0, scale: 0.85, transformOrigin: '50% 50%', duration: 0.35, stagger: 0.1 }, '-=0.2')
      .from(q('.connect__node--target, .connect__heading--bottom'), { autoAlpha: 0, y: 10, duration: 0.45, stagger: 0.08 }, '-=0.3');

    // Datenpunkte laufen nur, solange die Grafik im Bild ist.
    const visibility = ScrollTrigger.create({
      trigger: root,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: (self) => {
        inView = self.isActive;
        sync();
      },
    });

    return () => {
      visibility.kill();
      loop.kill();
      intro.kill();
    };
  });

  const leftChipX = HUB.x - CHIP.gap - CHIP.w;
  const rightChipX = HUB.x + HUB.w + CHIP.gap;

  return (
    <figure className="connect" ref={ref} data-own-motion>
      <svg viewBox={`0 0 ${VIEW_W} ${VIEW_H}`} role="img" aria-label={content.label}>
        <text className="connect__heading connect__heading--top" x={VIEW_W / 2} y={16}>{content.sourcesTitle}</text>

        {content.sources.map((source, index) => (
          <path key={`line-${source}`} className="connect__line" d={routePath(index)} pathLength={1} />
        ))}
        {content.sources.map((source) => (
          <circle key={`dot-${source}`} className="connect__dot" r={6} cx={0} cy={0} />
        ))}

        {content.sources.map((source, index) => (
          <Node key={source} x={COLUMNS[index]} y={SOURCE_Y} text={source} className="connect__node--source" />
        ))}

        <g className="connect__hub">
          <rect x={HUB.x} y={HUB.y} width={HUB.w} height={HUB.h} rx={8} />
          <text className="connect__hub-title" x={HUB.x + HUB.w / 2} y={HUB.y + 34}>{content.hub}</text>
          <text className="connect__hub-note" x={HUB.x + HUB.w / 2} y={HUB.y + 60}>{content.hubNote}</text>
        </g>
        <Chip x={leftChipX} text={content.tool} className="connect__chip--tool" />
        <Chip x={rightChipX} text={content.ki} className="connect__chip--ki" />

        {content.targets.map((target, index) => (
          <Node key={target} x={COLUMNS[index]} y={TARGET_Y} text={target} className="connect__node--target" />
        ))}

        <text className="connect__heading connect__heading--bottom" x={VIEW_W / 2} y={VIEW_H - 4}>{content.targetsTitle}</text>
      </svg>
      <figcaption className="connect__caption">{content.caption}</figcaption>
    </figure>
  );
}
