/* @ds-bundle: {"format":3,"namespace":"SBeteYGanaDesignSystem_9297b8","components":[{"name":"Badge","sourcePath":"components/badge/Badge.jsx"},{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"Countdown","sourcePath":"components/countdown/Countdown.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"ParticipationSelector","sourcePath":"components/participation/ParticipationSelector.jsx"},{"name":"ProgressBar","sourcePath":"components/progress/ProgressBar.jsx"}],"sourceHashes":{"components/badge/Badge.jsx":"bfdd20362632","components/buttons/Button.jsx":"831acd1bd5b8","components/cards/Card.jsx":"43fede718cfa","components/countdown/Countdown.jsx":"f06cb5632ad3","components/forms/Input.jsx":"7ae4a3004da8","components/participation/ParticipationSelector.jsx":"4cad2868978d","components/progress/ProgressBar.jsx":"7aab0a013280"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SBeteYGanaDesignSystem_9297b8 = window.SBeteYGanaDesignSystem_9297b8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badge/Badge.jsx
try { (() => {
function Badge({
  variant = 'trust',
  children,
  icon
}) {
  const variantStyles = {
    trust: {
      background: 'rgba(212,175,55,.12)',
      border: '1px solid rgba(212,175,55,.3)',
      color: 'var(--gold-400)'
    },
    success: {
      background: 'rgba(52,199,89,.12)',
      border: '1px solid rgba(52,199,89,.3)',
      color: 'var(--success)'
    },
    warning: {
      background: 'rgba(255,176,32,.12)',
      border: '1px solid rgba(255,176,32,.3)',
      color: 'var(--warning)'
    },
    danger: {
      background: 'rgba(255,69,58,.12)',
      border: '1px solid rgba(255,69,58,.3)',
      color: 'var(--danger)'
    },
    info: {
      background: 'rgba(77,163,255,.12)',
      border: '1px solid rgba(77,163,255,.3)',
      color: 'var(--info)'
    },
    neutral: {
      background: 'rgba(255,255,255,.06)',
      border: '1px solid rgba(255,255,255,.12)',
      color: 'var(--silver-300)'
    }
  };
  return React.createElement('span', {
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
      ...variantStyles[variant]
    }
  }, icon && React.createElement('span', {
    style: {
      fontSize: '12px',
      lineHeight: 1
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  children,
  disabled = false,
  onClick,
  fullWidth = false,
  icon
}) {
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
    whiteSpace: 'nowrap'
  };
  const sizeMap = {
    sm: {
      padding: '8px 18px',
      fontSize: 'var(--fs-sm)',
      borderRadius: 'var(--radius-pill)'
    },
    md: {
      padding: '14px 28px',
      fontSize: 'var(--fs-body)',
      borderRadius: 'var(--radius-pill)'
    },
    lg: {
      padding: '18px 40px',
      fontSize: '1.1rem',
      borderRadius: 'var(--radius-pill)'
    }
  };
  const variantStyles = {
    primary: {
      background: 'var(--grad-gold)',
      color: '#1A1407',
      boxShadow: 'var(--shadow-gold), var(--shadow-inset-metal)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--gold-400)',
      border: '1.5px solid var(--gold-600)',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--silver-300)',
      border: '1.5px solid rgba(255,255,255,.12)',
      boxShadow: 'none'
    }
  };
  const [hovered, setHovered] = React.useState(false);
  const hoverOverrides = hovered && !disabled ? {
    primary: {
      filter: 'brightness(1.12)',
      transform: 'translateY(-2px)',
      boxShadow: '0 12px 36px rgba(212,175,55,.5), var(--shadow-inset-metal)'
    },
    secondary: {
      background: 'rgba(245,200,66,.10)',
      borderColor: 'var(--gold-400)'
    },
    ghost: {
      background: 'rgba(255,255,255,.06)',
      borderColor: 'rgba(255,255,255,.25)'
    }
  }[variant] : {};
  const style = {
    ...baseStyle,
    ...sizeMap[size],
    ...variantStyles[variant],
    ...hoverOverrides
  };
  return React.createElement('button', {
    style,
    disabled,
    onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, icon && React.createElement('span', {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function Card({
  variant = 'default',
  children,
  style: extraStyle,
  padding = true
}) {
  const base = {
    borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-card)',
    padding: padding ? 'var(--space-6)' : undefined,
    transition: 'border-color var(--dur-fast) var(--ease-ui)'
  };
  const variants = {
    default: {
      background: 'var(--bg-elevated)',
      border: '1px solid rgba(255,255,255,.06)'
    },
    premium: {
      background: 'var(--bg-elevated)',
      border: '1px solid transparent',
      backgroundImage: 'var(--grad-border)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'border-box',
      boxShadow: 'var(--shadow-card), var(--shadow-gold)'
    },
    surface: {
      background: 'var(--bg-surface)',
      border: '1px solid rgba(255,255,255,.08)'
    }
  };

  // Premium needs special handling for background-clip
  if (variant === 'premium') {
    return React.createElement('div', {
      style: {
        ...base,
        position: 'relative',
        border: '1px solid transparent',
        backgroundImage: `var(--grad-border), linear-gradient(var(--bg-elevated), var(--bg-elevated))`,
        backgroundOrigin: 'border-box',
        backgroundClip: 'border-box, padding-box',
        boxShadow: 'var(--shadow-card), var(--shadow-gold)',
        ...extraStyle
      }
    }, padding ? React.createElement('div', {
      style: {
        padding: 'var(--space-6)'
      }
    }, children) : children);
  }
  return React.createElement('div', {
    style: {
      ...base,
      ...variants[variant],
      ...extraStyle
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/countdown/Countdown.jsx
try { (() => {
function Countdown({
  targetDate
}) {
  const calculate = () => {
    const now = Date.now();
    const diff = Math.max(0, new Date(targetDate).getTime() - now);
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor(diff % 86400000 / 3600000),
      minutes: Math.floor(diff % 3600000 / 60000),
      seconds: Math.floor(diff % 60000 / 1000)
    };
  };
  const [time, setTime] = React.useState(calculate);
  React.useEffect(() => {
    const id = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  const pad = n => String(n).padStart(2, '0');
  const blockStyle = {
    background: 'var(--bg-surface)',
    borderRadius: 'var(--radius-md)',
    padding: '16px 20px',
    textAlign: 'center',
    border: '1px solid rgba(255,255,255,.08)',
    minWidth: 72
  };
  const numStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '2rem',
    fontWeight: 700,
    fontVariantNumeric: 'tabular-nums',
    color: 'var(--silver-100)',
    lineHeight: 1,
    display: 'block'
  };
  const labelStyle = {
    fontSize: 'var(--fs-xs)',
    fontWeight: 600,
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'uppercase',
    color: 'var(--silver-700)',
    marginTop: 6,
    display: 'block'
  };
  const sepStyle = {
    fontSize: '1.5rem',
    fontWeight: 300,
    color: 'var(--silver-700)',
    alignSelf: 'flex-start',
    marginTop: 16
  };
  const units = [{
    value: time.days,
    label: 'Días'
  }, {
    value: time.hours,
    label: 'Hrs'
  }, {
    value: time.minutes,
    label: 'Min'
  }, {
    value: time.seconds,
    label: 'Seg'
  }];
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      alignItems: 'flex-start'
    }
  }, units.map((u, i) => React.createElement(React.Fragment, {
    key: u.label
  }, i > 0 && React.createElement('span', {
    style: sepStyle
  }, ':'), React.createElement('div', {
    style: blockStyle
  }, React.createElement('span', {
    style: numStyle
  }, pad(u.value)), React.createElement('span', {
    style: labelStyle
  }, u.label)))));
}
Object.assign(__ds_scope, { Countdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/countdown/Countdown.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  helpText,
  disabled = false
}) {
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
    boxSizing: 'border-box'
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      width: '100%'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: 'var(--fs-sm)',
      fontWeight: 600,
      color: 'var(--silver-300)',
      letterSpacing: '0.01em'
    }
  }, label), React.createElement('input', {
    type,
    value,
    onChange: e => onChange && onChange(e.target.value),
    placeholder,
    disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: inputStyle
  }), (error || helpText) && React.createElement('span', {
    style: {
      fontSize: 'var(--fs-xs)',
      color: error ? 'var(--danger)' : 'var(--silver-700)',
      lineHeight: 1.4
    }
  }, error || helpText));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/participation/ParticipationSelector.jsx
try { (() => {
const UNIT_PRICE = 3000;
const PACKAGES = [1, 5, 10, 25, 50, 100];
function formatCLP(n) {
  return '$' + n.toLocaleString('es-CL');
}
function ParticipationSelector({
  onChange
}) {
  const [qty, setQty] = React.useState(5);
  const update = n => {
    const clamped = Math.max(1, Math.min(500, n));
    setQty(clamped);
    onChange && onChange(clamped);
  };
  const total = qty * UNIT_PRICE;
  const chipStyle = n => ({
    padding: '8px 14px',
    borderRadius: 'var(--radius-pill)',
    fontSize: 'var(--fs-sm)',
    fontWeight: 600,
    cursor: 'pointer',
    border: qty === n ? '1.5px solid var(--gold-500)' : '1.5px solid rgba(255,255,255,.12)',
    background: qty === n ? 'rgba(212,175,55,.15)' : 'var(--bg-surface)',
    color: qty === n ? 'var(--gold-400)' : 'var(--silver-500)',
    transition: 'all var(--dur-fast) var(--ease-ui)'
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
    flexShrink: 0
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  },
  // Package chips
  React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, PACKAGES.map(n => React.createElement('button', {
    key: n,
    style: chipStyle(n),
    onClick: () => update(n)
  }, n))),
  // Stepper row
  React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, React.createElement('button', {
    style: stepperBtnStyle,
    onClick: () => update(qty - 1)
  }, '−'), React.createElement('input', {
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
      outline: 'none'
    }
  }), React.createElement('button', {
    style: stepperBtnStyle,
    onClick: () => update(qty + 1)
  }, '+'), React.createElement('span', {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--silver-500)'
    }
  }, `participaci${qty === 1 ? 'ón' : 'ones'}`)),
  // Price summary
  React.createElement('div', {
    style: {
      background: 'var(--bg-surface)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-4)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--silver-500)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--ls-caps)',
      marginBottom: 2
    }
  }, 'Total a pagar'), React.createElement('div', {
    style: {
      fontWeight: 800,
      fontSize: '1.5rem',
      fontVariantNumeric: 'tabular-nums',
      background: 'var(--grad-gold)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }
  }, formatCLP(total))), React.createElement('div', {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--silver-500)',
      textAlign: 'right'
    }
  }, React.createElement('div', null, `${formatCLP(UNIT_PRICE)} c/u`), React.createElement('div', {
    style: {
      color: 'var(--gold-400)',
      fontWeight: 600,
      marginTop: 2
    }
  }, `${qty} oportunidad${qty === 1 ? '' : 'es'} de ganar`))));
}
Object.assign(__ds_scope, { ParticipationSelector });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/participation/ParticipationSelector.jsx", error: String((e && e.message) || e) }); }

// components/progress/ProgressBar.jsx
try { (() => {
function ProgressBar({
  sold,
  total,
  showLabel = true
}) {
  const pct = Math.min(100, Math.round(sold / total * 100));
  const urgencyColor = pct >= 80 ? 'var(--danger)' : pct >= 60 ? 'var(--warning)' : null;
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      width: '100%'
    }
  }, showLabel && React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 'var(--fs-xs)',
      fontWeight: 600,
      color: urgencyColor || 'var(--silver-500)',
      letterSpacing: 'var(--ls-caps)',
      textTransform: 'uppercase'
    }
  }, pct >= 80 ? '¡Casi agotado!' : pct >= 60 ? 'Alta demanda' : 'Participaciones vendidas'), React.createElement('span', {
    style: {
      fontSize: 'var(--fs-xs)',
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--silver-500)'
    }
  }, `${sold.toLocaleString('es-CL')} de ${total.toLocaleString('es-CL')}`)), React.createElement('div', {
    style: {
      width: '100%',
      height: 8,
      background: 'var(--bg-surface)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,.06)'
    }
  }, React.createElement('div', {
    style: {
      height: '100%',
      width: `${pct}%`,
      background: urgencyColor ? `linear-gradient(90deg, var(--gold-600), ${urgencyColor})` : 'var(--grad-gold)',
      borderRadius: 'var(--radius-pill)',
      transition: 'width 0.6s var(--ease-ui)'
    }
  })), React.createElement('div', {
    style: {
      fontSize: 'var(--fs-xs)',
      color: 'var(--silver-700)',
      textAlign: 'right'
    }
  }, `${pct}% vendido`));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/progress/ProgressBar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Countdown = __ds_scope.Countdown;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ParticipationSelector = __ds_scope.ParticipationSelector;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

})();
