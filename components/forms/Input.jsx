export function Input({ label, placeholder, value, onChange, type = 'text', error, helpText, disabled = false }) {
  const [focused, setFocused] = React.useState(false);

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-surface)',
    border: `1.5px solid ${error ? 'var(--danger)' : focused ? 'var(--gold-500)' : 'rgba(255,255,255,.12)'}`,
    borderRadius: 'var(--radius-sm)',
    padding: '12px 16px',
    fontSize: 'var(--fs-body)',
    fontFamily: 'var(--font-body)',
    color: disabled ? 'var(--silver-700)' : 'var(--silver-100)',
    outline: 'none',
    transition: 'border-color var(--dur-fast) var(--ease-ui), box-shadow var(--dur-fast) var(--ease-ui)',
    boxShadow: focused && !error ? '0 0 0 3px rgba(212,175,55,.15)' : 'none',
    cursor: disabled ? 'not-allowed' : 'text',
    boxSizing: 'border-box',
  };

  return React.createElement(
    'div',
    { style: { display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' } },
    label && React.createElement(
      'label',
      {
        style: {
          fontSize: 'var(--fs-sm)',
          fontWeight: 600,
          color: 'var(--silver-300)',
          letterSpacing: '0.01em',
        },
      },
      label
    ),
    React.createElement('input', {
      type,
      value,
      onChange: e => onChange && onChange(e.target.value),
      placeholder,
      disabled,
      onFocus: () => setFocused(true),
      onBlur:  () => setFocused(false),
      style: inputStyle,
    }),
    (error || helpText) && React.createElement(
      'span',
      {
        style: {
          fontSize: 'var(--fs-xs)',
          color: error ? 'var(--danger)' : 'var(--silver-700)',
          lineHeight: 1.4,
        },
      },
      error || helpText
    )
  );
}
