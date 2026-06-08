/**
 * @startingPoint section="Components" subtitle="Gold CTA, secondary outlined, and ghost button variants" viewport="700x160"
 */
export interface ButtonProps {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Disabled state */
  disabled?: boolean;
  /** Stretch to full container width */
  fullWidth?: boolean;
  /** Leading icon node */
  icon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  children: React.ReactNode;
}
