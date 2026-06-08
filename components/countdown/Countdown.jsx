export function Countdown({ targetDate }) {
  const calculate = () => {
    const now  = Date.now();
    const diff = Math.max(0, new Date(targetDate).getTime() - now);
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000)  / 60000),
      seconds: Math.floor((diff % 60000)    / 1000),
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
    minWidth: 72,
  };

  const numStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '2rem',
    fontWeight: 700,
    fontVariantNumeric: 'tabular-nums',
    color: 'var(--silver-100)',
    lineHeight: 1,
    display: 'block',
  };

  const labelStyle = {
    fontSize: 'var(--fs-xs)',
    fontWeight: 600,
    letterSpacing: 'var(--ls-caps)',
    textTransform: 'uppercase',
    color: 'var(--silver-700)',
    marginTop: 6,
    display: 'block',
  };

  const sepStyle = {
    fontSize: '1.5rem',
    fontWeight: 300,
    color: 'var(--silver-700)',
    alignSelf: 'flex-start',
    marginTop: 16,
  };

  const units = [
    { value: time.days,    label: 'Días' },
    { value: time.hours,   label: 'Hrs' },
    { value: time.minutes, label: 'Min' },
    { value: time.seconds, label: 'Seg' },
  ];

  return React.createElement(
    'div',
    { style: { display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-start' } },
    units.map((u, i) =>
      React.createElement(
        React.Fragment,
        { key: u.label },
        i > 0 && React.createElement('span', { style: sepStyle }, ':'),
        React.createElement(
          'div',
          { style: blockStyle },
          React.createElement('span', { style: numStyle }, pad(u.value)),
          React.createElement('span', { style: labelStyle }, u.label)
        )
      )
    )
  );
}
