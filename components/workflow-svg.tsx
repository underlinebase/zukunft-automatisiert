'use client';
import { useEffect, useMemo, useState } from 'react';

export default function WorkflowSVG() {
  const [reduced, setReduced] = useState(false);
  const [activeEdge, setActiveEdge] = useState(0);
  const [revealedNodes, setRevealedNodes] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const W = 480, H = 380;
  const nodes = useMemo(() => ([
    { id: 'TRG', label: 'TRIGGER',  x: 60,  y: 80,  shape: 'square' },
    { id: 'EXT', label: 'EXTRACT',  x: 200, y: 50,  shape: 'circle' },
    { id: 'CLS', label: 'CLASSIFY', x: 200, y: 160, shape: 'circle' },
    { id: 'DCS', label: 'DECISION', x: 320, y: 110, shape: 'diamond' },
    { id: 'EMB', label: 'EMBED',    x: 200, y: 260, shape: 'circle' },
    { id: 'STO', label: 'STORE',    x: 320, y: 220, shape: 'square' },
    { id: 'NTF', label: 'NOTIFY',   x: 420, y: 90,  shape: 'square' },
    { id: 'WRT', label: 'WRITE',    x: 420, y: 220, shape: 'square' },
  ]), []);
  const edges = useMemo(() => ([
    [0,1],[0,2],[1,3],[2,3],[3,6],[2,4],[4,5],[5,7],[3,5],
  ]), []);

  useEffect(() => {
    if (reduced) { setRevealedNodes(nodes.length); return; }
    let i = 0;
    const id = setInterval(() => {
      i += 1; setRevealedNodes(i);
      if (i >= nodes.length) clearInterval(id);
    }, 350);
    return () => clearInterval(id);
  }, [reduced, nodes.length]);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setActiveEdge(e => (e + 1) % edges.length), 3200);
    return () => clearInterval(id);
  }, [reduced, edges.length]);

  const activeEdgePath = (() => {
    const [a, b] = edges[activeEdge] || [0, 0];
    const A = nodes[a], B = nodes[b];
    if (!A || !B) return '';
    const mx = (A.x + B.x) / 2;
    return `M ${A.x} ${A.y} Q ${mx} ${A.y} ${B.x} ${B.y}`;
  })();

  return (
    <svg className="hero__viz-svg" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <g className="wf-grid">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={'h' + i} x1={0} x2={W} y1={(i + 1) * 45} y2={(i + 1) * 45} />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={'v' + i} y1={0} y2={H} x1={(i + 1) * 45} x2={(i + 1) * 45} />
        ))}
      </g>
      {edges.map(([a, b], i) => {
        const A = nodes[a], B = nodes[b];
        const visible = a < revealedNodes && b < revealedNodes;
        const isActive = i === activeEdge;
        const mx = (A.x + B.x) / 2;
        const d = `M ${A.x} ${A.y} Q ${mx} ${A.y} ${B.x} ${B.y}`;
        return (
          <path key={i} d={d}
            className={isActive ? 'wf-edge-active' : 'wf-edge'}
            style={{ opacity: visible ? (isActive ? 1 : 0.45) : 0, transition: 'opacity .8s ease' }} />
        );
      })}
      {nodes.map((n, idx) => {
        const visible = idx < revealedNodes;
        const isActive = edges[activeEdge] && (edges[activeEdge][0] === idx || edges[activeEdge][1] === idx);
        const opacity = visible ? 1 : 0;
        const cls = `wf-node ${isActive ? 'wf-node--active' : ''}`;
        const style = { opacity, transition: 'opacity .8s ease' };
        if (n.shape === 'circle') return <circle key={n.id} cx={n.x} cy={n.y} r={6} className={cls} style={style} />;
        if (n.shape === 'diamond') return <rect key={n.id} x={n.x - 6} y={n.y - 6} width={12} height={12} transform={`rotate(45 ${n.x} ${n.y})`} className={cls} style={style} />;
        return <rect key={n.id} x={n.x - 6} y={n.y - 6} width={12} height={12} className={cls} style={style} />;
      })}
      {nodes.map((n, i) => (
        <text key={'l' + n.id} x={n.x + 12} y={n.y + 3} className="wf-node-label"
          style={{ opacity: i < revealedNodes ? 0.7 : 0, transition: 'opacity .8s ease' }}>
          {n.label}
        </text>
      ))}
      {!reduced && activeEdgePath && (
        <circle r={3} className="wf-pulse" key={`pulse-${activeEdge}`}>
          <animateMotion dur="2.4s" repeatCount="1" path={activeEdgePath} />
        </circle>
      )}
      <g stroke="rgba(10,10,10,0.4)" strokeWidth="1" fill="none">
        <path d="M 4 12 L 4 4 L 12 4" />
        <path d={`M ${W - 12} 4 L ${W - 4} 4 L ${W - 4} 12`} />
        <path d={`M 4 ${H - 12} L 4 ${H - 4} L 12 ${H - 4}`} />
        <path d={`M ${W - 12} ${H - 4} L ${W - 4} ${H - 4} L ${W - 4} ${H - 12}`} />
      </g>
    </svg>
  );
}
