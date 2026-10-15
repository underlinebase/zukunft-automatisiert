// Canvas-Texturen für die 3D-Wochenansicht. Farben kommen aus den CSS-Variablen,
// damit ein Palettentausch auch die 3D-Szene erfasst.

import { CanvasTexture, SRGBColorSpace } from 'three';

export interface ScenePalette {
  bg: string;
  surface: string;
  line: string;
  text: string;
  textMuted: string;
  brand: string;
  fontSans: string;
  fontSerif: string;
}

const PX_PER_UNIT = 600;

export function readPalette(): ScenePalette {
  const css = getComputedStyle(document.documentElement);
  const read = (name: string, fallback: string) => css.getPropertyValue(name).trim() || fallback;
  return {
    bg: read('--c-bg', '#FFFFFF'),
    surface: read('--c-surface', '#F3F3F5'),
    line: read('--c-line', '#E4E4E8'),
    text: read('--c-text', '#252529'),
    textMuted: read('--c-text-muted', '#5E5E66'),
    brand: read('--c-brand', '#742D40'),
    fontSans: read('--font-figtree', 'Arial, sans-serif'),
    fontSerif: read('--font-fraunces', 'Georgia, serif'),
  };
}

function createCanvas(widthUnits: number, heightUnits: number) {
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(widthUnits * PX_PER_UNIT);
  canvas.height = Math.round(heightUnits * PX_PER_UNIT);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context nicht verfügbar');
  return { canvas, ctx };
}

function toTexture(canvas: HTMLCanvasElement, anisotropy: number): CanvasTexture {
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = anisotropy;
  return texture;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
}

function wrapLines(ctx: CanvasRenderingContext2D, text: string, maxWidth: number, maxLines: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (ctx.measureText(candidate).width <= maxWidth || !current) {
      current = candidate;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, maxLines);
}

export function blockTexture(label: string, w: number, h: number, p: ScenePalette, anisotropy: number): CanvasTexture {
  const { canvas, ctx } = createCanvas(w, h);
  const pad = canvas.width * 0.09;
  const radius = canvas.width * 0.04;

  roundRect(ctx, 2, 2, canvas.width - 4, canvas.height - 4, radius);
  ctx.fillStyle = p.surface;
  ctx.fill();
  ctx.lineWidth = 3;
  ctx.strokeStyle = p.line;
  ctx.stroke();

  const fontSize = Math.round(canvas.height * 0.15);
  ctx.font = `600 ${fontSize}px ${p.fontSans}`;
  ctx.fillStyle = p.text;
  ctx.textBaseline = 'top';
  const lines = wrapLines(ctx, label, canvas.width - pad * 2.4, 2);
  lines.forEach((line, i) => ctx.fillText(line, pad, pad + i * fontSize * 1.2));

  return toTexture(canvas, anisotropy);
}

export function headerTexture(day: string, w: number, h: number, p: ScenePalette, anisotropy: number): CanvasTexture {
  const { canvas, ctx } = createCanvas(w, h);
  const fontSize = Math.round(canvas.height * 0.34);
  ctx.font = `600 ${fontSize}px ${p.fontSans}`;
  ctx.fillStyle = p.textMuted;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(day, canvas.width / 2, canvas.height * 0.5);
  return toTexture(canvas, anisotropy);
}

export function checkTexture(p: ScenePalette, anisotropy: number): CanvasTexture {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context nicht verfügbar');
  ctx.fillStyle = p.brand;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2 - 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = size * 0.1;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(size * 0.29, size * 0.52);
  ctx.lineTo(size * 0.44, size * 0.66);
  ctx.lineTo(size * 0.72, size * 0.36);
  ctx.stroke();
  return toTexture(canvas, anisotropy);
}

export function freedTexture(label: string, w: number, h: number, p: ScenePalette, anisotropy: number): CanvasTexture {
  const { canvas, ctx } = createCanvas(w, h);
  roundRect(ctx, 0, 0, canvas.width, canvas.height, canvas.width * 0.04);
  ctx.fillStyle = p.brand;
  ctx.fill();
  const fontSize = Math.round(canvas.width * 0.15);
  ctx.font = `600 ${fontSize}px ${p.fontSerif}`;
  ctx.fillStyle = '#FFFFFF';
  ctx.textBaseline = 'top';
  const pad = canvas.width * 0.1;
  const lines = wrapLines(ctx, label, canvas.width - pad * 2, 2);
  lines.forEach((line, i) => ctx.fillText(line, pad, pad + i * fontSize * 1.15));
  return toTexture(canvas, anisotropy);
}
