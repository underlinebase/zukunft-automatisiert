import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, test } from 'vitest';
import { ANLEITUNG, VORLAGEN, VORLAGEN_FAQS, VORLAGEN_MUSTER, findVorlage, freigegebeneVorlagen, vorlageHref, vorlageStatus } from './vorlagen';
import { VORLAGEN_PAGE } from './pages';
import { aiPatternHits } from './style';

const PUBLIC_DIR = path.resolve(__dirname, '../../public');
// Ungetestete Entwürfe liegen außerhalb von public/, damit sie nicht abrufbar sind.
const DRAFT_DIR = path.resolve(__dirname, '../../vorlagen-entwuerfe');
const META_DESCRIPTION_MAX = 160;
const PLACEHOLDER_PATTERN = /PLATZHALTER[-_][A-Za-z_-]+/g;
const STICKY_NOTE = 'n8n-nodes-base.stickyNote';

interface N8nNode {
  id: string;
  name: string;
  type: string;
  typeVersion: number;
  position: [number, number];
  parameters: Record<string, unknown>;
  credentials?: unknown;
}

interface N8nConnection {
  node: string;
  type: string;
  index: number;
}

interface N8nWorkflow {
  name: string;
  nodes: N8nNode[];
  connections: Record<string, Record<string, N8nConnection[][]>>;
  settings: Record<string, unknown>;
}

function readWorkflowFile(datei: string): string {
  const published = path.join(PUBLIC_DIR, datei);
  const draft = path.join(DRAFT_DIR, path.basename(datei));
  return readFileSync(existsSync(published) ? published : draft, 'utf8');
}

function readWorkflow(datei: string): N8nWorkflow {
  return JSON.parse(readWorkflowFile(datei)) as N8nWorkflow;
}

function allTexts(): string[] {
  const fromVorlagen = VORLAGEN.flatMap((vorlage) => [
    vorlage.title,
    vorlage.seoTitle ?? '',
    vorlage.lead,
    ...vorlage.beschreibung,
    ...vorlage.schritte.flatMap((schritt) => [schritt.name, schritt.text]),
    ...vorlage.benoetigt,
    ...vorlage.platzhalter.map((platzhalter) => platzhalter.text),
    ...vorlage.grenzen,
  ]);
  return [
    ...fromVorlagen,
    ...ANLEITUNG.flatMap((schritt) => [schritt.titel, schritt.text]),
    ...VORLAGEN_FAQS.flatMap((faq) => [faq.q, faq.a]),
    ...VORLAGEN_MUSTER,
  ];
}

describe('Vorlagen data', () => {
  test('have unique slugs and files below /vorlagen', () => {
    const slugs = VORLAGEN.map((vorlage) => vorlage.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    VORLAGEN.forEach((vorlage) => expect(vorlage.datei).toBe(`/vorlagen/${vorlage.slug}.json`));
  });

  test('leads fit into a meta description', () => {
    VORLAGEN.forEach((vorlage) => expect(vorlage.lead.length, vorlage.slug).toBeLessThanOrEqual(META_DESCRIPTION_MAX));
  });

  test('every template explains its steps, needs and limits', () => {
    VORLAGEN.forEach((vorlage) => {
      expect(vorlage.schritte.length, vorlage.slug).toBeGreaterThanOrEqual(3);
      expect(vorlage.benoetigt.length, vorlage.slug).toBeGreaterThan(0);
      expect(vorlage.grenzen.length, vorlage.slug).toBeGreaterThan(0);
    });
  });

  test('only tested templates have a public file, untested ones stay in the draft folder', () => {
    // Freigabe: Datei nach public/vorlagen/ verschieben und `getestet: true` setzen. Beides gehört zusammen.
    VORLAGEN.forEach((vorlage) => {
      const isPublic = existsSync(path.join(PUBLIC_DIR, vorlage.datei));
      const isDraft = existsSync(path.join(DRAFT_DIR, path.basename(vorlage.datei)));
      expect(isPublic, `${vorlage.slug}: Datei öffentlich`).toBe(vorlage.getestet);
      expect(isDraft, `${vorlage.slug}: Entwurf vorhanden`).toBe(!vorlage.getestet);
    });
  });

  test('the overview goes public with the first tested template', () => {
    expect(freigegebeneVorlagen().every((vorlage) => vorlage.getestet)).toBe(true);
    expect(VORLAGEN_PAGE.listed).toBe(freigegebeneVorlagen().length > 0);
  });

  test('helpers find templates, build links and name the status', () => {
    expect(findVorlage('anfragen-erfassen')?.title).toBeDefined();
    expect(findVorlage('gibt-es-nicht')).toBeNull();
    expect(vorlageHref('anfragen-erfassen')).toBe('/vorlagen/anfragen-erfassen');
    expect(vorlageStatus({ getestet: false })).toBe('Wird gerade getestet');
    expect(vorlageStatus({ getestet: true })).toBe('Getestet');
  });
});

describe.each(VORLAGEN.map((vorlage) => [vorlage.slug, vorlage] as const))('n8n workflow %s', (_slug, vorlage) => {
  const raw = readWorkflowFile(vorlage.datei);
  const workflow = readWorkflow(vorlage.datei);
  const workingNodes = workflow.nodes.filter((node) => node.type !== STICKY_NOTE);
  const names = workflow.nodes.map((node) => node.name);

  test('has the n8n export structure', () => {
    expect(typeof workflow.name).toBe('string');
    expect(Array.isArray(workflow.nodes)).toBe(true);
    expect(workingNodes.length).toBeGreaterThanOrEqual(3);
    expect(typeof workflow.connections).toBe('object');
    expect(workflow.settings).toMatchObject({ executionOrder: 'v1' });
  });

  test('every node has id, name, type, version, position and parameters', () => {
    workflow.nodes.forEach((node) => {
      expect(node.id, node.name).toMatch(/^[0-9a-f-]{36}$/);
      expect(node.type, node.name).toMatch(/^n8n-nodes-base\./);
      expect(typeof node.typeVersion, node.name).toBe('number');
      expect(node.position, node.name).toHaveLength(2);
      expect(typeof node.parameters, node.name).toBe('object');
    });
  });

  test('node names and ids are unique', () => {
    expect(new Set(names).size).toBe(names.length);
    expect(new Set(workflow.nodes.map((node) => node.id)).size).toBe(workflow.nodes.length);
  });

  test('connections only point to existing nodes', () => {
    Object.entries(workflow.connections).forEach(([source, outputs]) => {
      expect(names, `Quelle ${source}`).toContain(source);
      Object.values(outputs).flat(2).forEach((target) => {
        expect(names, `Ziel ${target.node}`).toContain(target.node);
        expect(target.type).toBe('main');
      });
    });
  });

  test('every working node is connected', () => {
    const connected = new Set<string>();
    Object.entries(workflow.connections).forEach(([source, outputs]) => {
      connected.add(source);
      Object.values(outputs).flat(2).forEach((target) => connected.add(target.node));
    });
    workingNodes.forEach((node) => expect(connected.has(node.name), node.name).toBe(true));
  });

  test('contains no credentials and no real e-mail addresses', () => {
    workflow.nodes.forEach((node) => expect(node.credentials, node.name).toBeUndefined());
    expect(raw).not.toMatch(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,}/);
  });

  test('lists exactly the placeholders that the file contains', () => {
    const inFile = new Set(raw.match(PLACEHOLDER_PATTERN) ?? []);
    const documented = new Set(vorlage.platzhalter.map((platzhalter) => platzhalter.name));
    expect([...inFile].sort()).toEqual([...documented].sort());
  });

  test('the step list on the page matches the working nodes', () => {
    // Antwort-Knoten am Webhook zählen nicht als eigener Schritt im Schaubild.
    const steps = workingNodes.filter((node) => node.type !== 'n8n-nodes-base.respondToWebhook');
    expect(vorlage.schritte).toHaveLength(steps.length);
  });
});

describe('Vorlagen: keine typischen KI-Muster', () => {
  test('page texts pass the style rules', () => {
    allTexts().forEach((text) => expect(aiPatternHits(text), text).toEqual([]));
  });

  test('texts inside the workflow files pass the style rules', () => {
    VORLAGEN.forEach((vorlage) => {
      const workflow = readWorkflow(vorlage.datei);
      workflow.nodes
        .filter((node) => node.type === STICKY_NOTE)
        .forEach((node) => expect(aiPatternHits(String(node.parameters.content)), vorlage.slug).toEqual([]));
    });
  });
});
