Gold-fill progress bar showing participations sold vs. total available. Drives FOMO.

```jsx
<ProgressBar sold={3420} total={5000} />
<ProgressBar sold={4200} total={5000} />   // turns warning at 80%+
<ProgressBar sold={850} total={5000} showLabel={false} />
```

Bar fill: gold gradient by default. Shifts to gold→warning at 60%+, gold→danger at 80%+ with an urgency label ("¡Casi agotado!"). Use in the hero and participation selector sections. Update `sold` in real-time from Supabase subscriptions for live FOMO effect.
