/**
 * @startingPoint section="Components" subtitle="Dark content container — default, premium metal border, surface variants" viewport="700x220"
 */
export interface CardProps {
  /** Visual variant */
  variant?: 'default' | 'premium' | 'surface';
  /** Inner padding (default true — set false for custom padding or image bleed) */
  padding?: boolean;
  /** Additional inline styles */
  style?: React.CSSProperties;
  children: React.ReactNode;
}
