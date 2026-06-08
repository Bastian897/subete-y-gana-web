export function Badge({ variant = 'trust', children, icon }) {
  const variantStyles = {
    trust: {
      background: 'rgba(212,175,55,.12)',
      border: '1px solid rgba(212,175,55,.3)',
      color: 'var(--gold-400)',
    },
    success: {
      background: 'rgba(52,199,89,.12)',
      border: '1px solid rgba(52,199,89,.3)',
      color: 'var(--success)',
    },
    warning: {
      background: 'rgba(255,176,32,.12)',
      border: '1px solid rgba(255,176,32,.3)',
      color: 'var(--warning)',
    },
    danger: {
      background: 'rgba(255,69,58,.12)',
      border: '1px solid rgba(255,69,58,.3)',
      color: 'var(--danger)',
    },
    info: {
      background: 'rgba(77,163,255,.12)',
      border: '1px solid rgba(77,163,255,.3)',
      color: 'var(--info)',
    },
    neutral: {
      background: 'rgba(255,255,255,.06)',
      border: '1px solid rgba(255,255,255,.12)',
      color: 'var(--silver-300)',
    },
  };

  return React.createElement(
    'span',
    {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '4px 10px',
        borderRadius: 'var(--radius-pill)',
        fontSize: 'var(--fs-xs)',
        fontWeight: 600,
        letterSpacing: 'var(--ls-caps)',
        textTransform: 'uppercase',
        lineHeight: 1,
        ...variantStyles[variant],
      },
    },
    icon && React.createElement('span', { style: { fontSize: '12px', lineHeight: 1 } }, icon),
    children
  );
}
