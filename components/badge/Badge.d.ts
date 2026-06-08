export interface BadgeProps {
  /** Color semantic intent */
  variant?: 'trust' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  /** Optional leading icon or emoji */
  icon?: React.ReactNode;
  children: React.ReactNode;
}
