Dark-themed text input with gold focus ring and error state for Súbete y Gana forms.

```jsx
<Input label="Correo electrónico" type="email" placeholder="tu@correo.cl" />
<Input label="Nombre completo" value={name} onChange={setName} />
<Input label="RUT" error="RUT inválido — verifica el formato" />
<Input label="Teléfono" helpText="Para enviarte la confirmación por WhatsApp" disabled />
```

Always use `label` for accessibility. Use `error` to show validation feedback (turns border red + shows message). Use `helpText` for optional guidance when no error is present.
