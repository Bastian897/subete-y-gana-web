export function Card({ variant = 'default', children, style: extraStyle, padding = true }) {
  const base = {
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-card)',
    padding: padding ? 'var(--space-6)' : undefined,
    transition: 'border-color var(--dur-fast) var(--ease-ui)',
  };

  const variants = {
    default: {
      background: 'var(--bg-elevated)',
      border: '1px solid rgba(255,255,255,.06)',
    },
    premium: {
      background: 'var(--bg-elevated)',
      border: '1px solid transparent',
      backgroundImage: 'var(--grad-border)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'border-box',
      boxShadow: 'var(--shadow-card), var(--shadow-gold)',
    },
    surface: {
      background: 'var(--bg-surface)',
      border: '1px solid rgba(255,255,255,.08)',
    },
  };

  // Premium needs special handling for background-clip
  if (variant === 'premium') {
    return React.createElement(
      'div',
      {
        style: {
          ...base,
          position: 'relative',
          border: '1px solid transparent',
          backgroundImage: `var(--grad-border), linear-gradient(var(--bg-elevated), var(--bg-elevated))`,
          backgroundOrigin: 'border-box',
          backgroundClip: 'border-box, padding-box',
          boxShadow: 'var(--shadow-card), var(--shadow-gold)',
          ...extraStyle,
        },
      },
      padding
        ? React.createElement('div', { style: { padding: 'var(--space-6)' } }, children)
        : children
    );
  }

  return React.createElement(
    'div',
    { style: { ...base, ...variants[variant], ...extraStyle } },
    children
  );
}
