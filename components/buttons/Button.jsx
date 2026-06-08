export function Button({ variant = 'primary', size = 'md', children, disabled = false, onClick, fullWidth = false, icon }) {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    letterSpacing: '0.01em',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all var(--dur-base) var(--ease-ui)',
    textDecoration: 'none',
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? 0.5 : 1,
    position: 'relative',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  };

  const sizeMap = {
    sm: { padding: '8px 18px', fontSize: 'var(--fs-sm)', borderRadius: 'var(--radius-pill)' },
    md: { padding: '14px 28px', fontSize: 'var(--fs-body)', borderRadius: 'var(--radius-pill)' },
    lg: { padding: '18px 40px', fontSize: '1.1rem', borderRadius: 'var(--radius-pill)' },
  };

  const variantStyles = {
    primary: {
      background: 'var(--grad-gold)',
      color: '#1A1407',
      boxShadow: 'var(--shadow-gold), var(--shadow-inset-metal)',
    },
    secondary: {
      background: 'transparent',
      color: 'var(--gold-400)',
      border: '1.5px solid var(--gold-600)',
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--silver-300)',
      border: '1.5px solid rgba(255,255,255,.12)',
      boxShadow: 'none',
    },
  };

  const [hovered, setHovered] = React.useState(false);

  const hoverOverrides = hovered && !disabled ? {
    primary:   { filter: 'brightness(1.12)', transform: 'translateY(-2px)', boxShadow: '0 12px 36px rgba(212,175,55,.5), var(--shadow-inset-metal)' },
    secondary:  { background: 'rgba(245,200,66,.10)', borderColor: 'var(--gold-400)' },
    ghost:      { background: 'rgba(255,255,255,.06)', borderColor: 'rgba(255,255,255,.25)' },
  }[variant] : {};

  const style = {
    ...baseStyle,
    ...sizeMap[size],
    ...variantStyles[variant],
    ...hoverOverrides,
  };

  return React.createElement(
    'button',
    {
      style,
      disabled,
      onClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
    icon && React.createElement('span', { style: { display: 'flex', alignItems: 'center' } }, icon),
    children
  );
}
