export function ProgressBar({ sold, total, showLabel = true }) {
  const pct = Math.min(100, Math.round((sold / total) * 100));

  const urgencyColor = pct >= 80
    ? 'var(--danger)'
    : pct >= 60
    ? 'var(--warning)'
    : null;

  return React.createElement(
    'div',
    { style: { display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', width: '100%' } },

    showLabel && React.createElement(
      'div',
      { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
      React.createElement(
        'span',
        { style: { fontSize: 'var(--fs-xs)', fontWeight: 600, color: urgencyColor || 'var(--silver-500)', letterSpacing: 'var(--ls-caps)', textTransform: 'uppercase' } },
        pct >= 80 ? '¡Casi agotado!' : pct >= 60 ? 'Alta demanda' : 'Participaciones vendidas'
      ),
      React.createElement(
        'span',
        { style: { fontSize: 'var(--fs-xs)', fontVariantNumeric: 'tabular-nums', color: 'var(--silver-500)' } },
        `${sold.toLocaleString('es-CL')} de ${total.toLocaleString('es-CL')}`
      )
    ),

    React.createElement(
      'div',
      {
        style: {
          width: '100%',
          height: 8,
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-pill)',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,.06)',
        },
      },
      React.createElement('div', {
        style: {
          height: '100%',
          width: `${pct}%`,
          background: urgencyColor
            ? `linear-gradient(90deg, var(--gold-600), ${urgencyColor})`
            : 'var(--grad-gold)',
          borderRadius: 'var(--radius-pill)',
          transition: 'width 0.6s var(--ease-ui)',
        },
      })
    ),

    React.createElement(
      'div',
      { style: { fontSize: 'var(--fs-xs)', color: 'var(--silver-700)', textAlign: 'right' } },
      `${pct}% vendido`
    )
  );
}
