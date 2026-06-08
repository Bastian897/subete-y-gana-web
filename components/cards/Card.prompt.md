Dark-themed content container with three visual levels matching the Súbete y Gana surface system.

```jsx
<Card variant="default">Contenido estándar</Card>
<Card variant="premium">Tarjeta con borde metálico dorado</Card>
<Card variant="surface">Modal o formulario interno</Card>
<Card variant="default" padding={false}><img src="..." /></Card>
```

Variants: `default` (elevated bg, subtle border), `premium` (metallic gradient border + gold glow), `surface` (darkest, for form groups / modals).
Use `premium` sparingly — prize cards, featured participation packages. Use `surface` inside modals and inline form panels.
