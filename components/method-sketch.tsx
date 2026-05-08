export default function MethodSketch({ kind }: { kind: 'map' | 'diag' | 'op' | 'after' }) {
  const stroke = '#0A0A0A';
  const accent = '#1B4965';
  const sw = 1.2;
  const common = { stroke, strokeWidth: sw, fill: 'none', vectorEffect: 'non-scaling-stroke' as const };

  if (kind === 'map') return (
    <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100%' }}>
      <rect x="6"   y="6"  width="40" height="20" {...common} />
      <rect x="60"  y="6"  width="60" height="20" {...common} />
      <rect x="134" y="6"  width="60" height="20" {...common} />
      <rect x="6"   y="40" width="40" height="20" {...common} />
      <rect x="60"  y="40" width="60" height="20" {...common} stroke={accent} />
      <rect x="134" y="40" width="60" height="20" {...common} />
      <rect x="6"   y="74" width="188" height="20" {...common} />
      <line x1="46"  y1="16" x2="60"  y2="16" {...common} />
      <line x1="120" y1="16" x2="134" y2="16" {...common} />
      <line x1="46"  y1="50" x2="60"  y2="50" {...common} stroke={accent} />
      <line x1="120" y1="50" x2="134" y2="50" {...common} />
    </svg>
  );

  if (kind === 'diag') return (
    <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100%' }}>
      <line x1="10" y1="80" x2="190" y2="80" {...common} />
      <line x1="10" y1="80" x2="10"  y2="10" {...common} />
      {[20, 40, 60, 80, 100, 120, 140, 160].map((x, i) => (
        <rect key={i} x={x - 3} y={80 - (10 + i * 6)} width="6" height={10 + i * 6}
          {...common} fill={i === 5 ? accent : 'none'} />
      ))}
      <line x1="10" y1="40" x2="190" y2="40" stroke={accent} strokeDasharray="2 3" strokeWidth={sw} fill="none" />
    </svg>
  );

  if (kind === 'op') return (
    <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100%' }}>
      <circle cx="30"  cy="50" r="6" {...common} />
      <circle cx="80"  cy="20" r="6" {...common} />
      <circle cx="80"  cy="80" r="6" {...common} />
      <circle cx="140" cy="50" r="6" {...common} fill={accent} stroke={accent} />
      <circle cx="190" cy="50" r="6" {...common} />
      <path d="M 36 50 Q 58 35 74 22" {...common} />
      <path d="M 36 50 Q 58 65 74 78" {...common} />
      <path d="M 86 22 Q 110 35 134 50" {...common} stroke={accent} />
      <path d="M 86 78 Q 110 65 134 50" {...common} />
      <line x1="146" y1="50" x2="184" y2="50" {...common} />
    </svg>
  );

  return (
    <svg viewBox="0 0 200 100" style={{ width: '100%', height: '100%' }}>
      <line x1="10" y1="50" x2="190" y2="50" {...common} />
      {[10, 50, 90, 130, 170].map((x, i) => (
        <g key={i}>
          <line x1={x} y1="44" x2={x} y2="56" {...common} stroke={i === 2 ? accent : stroke} />
          <text x={x} y="72" fontFamily="Geist Mono, monospace" fontSize="7" fill="#6B7280" textAnchor="middle">T{i}</text>
        </g>
      ))}
      <circle cx="90" cy="50" r="3" fill={accent} />
    </svg>
  );
}
