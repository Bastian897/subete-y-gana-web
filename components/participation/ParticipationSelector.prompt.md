The core commerce widget. Combines quick-pick package chips (1/5/10/25/50/100) with a manual stepper and a live price summary in CLP.

```jsx
<ParticipationSelector onChange={(qty) => console.log(qty)} />
```

Unit price is $3.000 CLP, hardcoded to match the current sorteo pricing.
The price summary shows total in gold gradient text and individual price + opportunity count.
Use directly above the primary CTA button on the landing page and inside the purchase modal.
