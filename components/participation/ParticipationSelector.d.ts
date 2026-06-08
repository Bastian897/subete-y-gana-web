/**
 * @startingPoint section="Components" subtitle="Quantity stepper + quick-pick chips + live CLP price — core purchase widget" viewport="700x240"
 */
export interface ParticipationSelectorProps {
  /** Called with new quantity whenever selection changes */
  onChange?: (qty: number) => void;
}
