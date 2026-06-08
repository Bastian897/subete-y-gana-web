const UNIT_PRICE = 3000;
const PACKAGES = [1, 5, 10, 25, 50, 100];

function formatCLP(n) {
  return '$' + n.toLocaleString('es-CL');
}

export function ParticipationSelector({ onChange }) {
  const [qty, setQty] = React.useState(5);

  const update = (n) => {
    const clamped = Math.max(1, Math.min(500, n));
    setQty(clamped);
    onChange && onChange(clamped);
  };

  const total = qty * UNIT_PRICE;

  const chipStyle = (n) => ({
    padding: '8px 14px',
    borderRadius: 'var(--radius-pill)',
    fontSize: 'var(--fs-sm)',
    fontWeight: 600,
    cursor: 'pointer',
    border: qty === n ? '1.5px solid var(--gold-500)' : '1.5px solid rgba(255,255,255,.12)',
    background: qty === n ? 'rgba(212,175,55,.15)' : 'var(--bg-surface)',
    color: qty === n ? 'var(--gold-400)' : 'var(--silver-500)',
    transition: 'all var(--dur-fast) var(--ease-ui)',
  });

  const stepperBtnStyle = {
    width: 44,
    height: 44,
    borderRadius: 'var(--radius-pill)',
    border: '1.5px solid rgba(255,255,255,.14)',
    background: 'var(--bg-surface)',
    color: 'var(--silver-100)',
    fontSize: '1.25rem',
    fontWeight: 300,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'border-color var(--dur-fast) var(--ease-ui)',
    flexShrink: 0,
  };

  return React.createElement(
    'div',
    { style: { display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' } },

    // Package chips
    React.createElement(
      'div',
      { style: { display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' } },
      PACKAGES.map(n =>
        React.createElement(
          'button',
          { key: n, style: chipStyle(n), onClick: () => update(n) },
          n
        )
      )
    ),

    // Stepper row
    React.createElement(
      'div',
      { style: { display: 'flex', alignItems: 'center', gap: 'var(--space-3)' } },
      React.createElement('button', { style: stepperBtnStyle, onClick: () => update(qty - 1) }, '−'),
      React.createElement(
        'input',
        {
          type: 'number',
          value: qty,
          min: 1,
          max: 500,
          onChange: e => update(parseInt(e.target.value) || 1),
          style: {
            width: 80,
            textAlign: 'center',
            background: 'var(--bg-surface)',
            border: '1.5px solid rgba(255,255,255,.12)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--silver-100)',
            fontSize: '1.25rem',
            fontWeight: 700,
            fontFamily: 'var(--font-body)',
            fontVariantNumeric: 'tabular-nums',
            padding: '8px 0',
            outline: 'none',
          },
        }
      ),
      React.createElement('button', { style: stepperBtnStyle, onClick: () => update(qty + 1) }, '+'),
      React.createElement(
        'span',
        { style: { fontSize: 'var(--fs-sm)', color: 'var(--silver-500)' } },
        `participaci${qty === 1 ? 'ón' : 'ones'}`
      )
    ),

    // Price summary
    React.createElement(
      'div',
      {
        style: {
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-md)',
          padding: 'var(--space-4)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      },
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { style: { fontSize: 'var(--fs-xs)', color: 'var(--silver-500)', textTransform: 'uppercase', letterSpacing: 'var(--ls-caps)', marginBottom: 2 } },
          'Total a pagar'
        ),
        React.createElement(
          'div',
          {
            style: {
              fontWeight: 800,
              fontSize: '1.5rem',
              fontVariantNumeric: 'tabular-nums',
              background: 'var(--grad-gold)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            },
          },
          formatCLP(total)
        )
      ),
      React.createElement(
        'div',
        { style: { fontSize: 'var(--fs-xs)', color: 'var(--silver-500)', textAlign: 'right' } },
        React.createElement('div', null, `${formatCLP(UNIT_PRICE)} c/u`),
        React.createElement(
          'div',
          { style: { color: 'var(--gold-400)', fontWeight: 600, marginTop: 2 } },
          `${qty} oportunidad${qty === 1 ? '' : 'es'} de ganar`
        )
      )
    )
  );
}
