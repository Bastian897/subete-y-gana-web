export interface ProgressBarProps {
  /** Number of participations already sold */
  sold: number;
  /** Total participations available */
  total: number;
  /** Show the sold/total label row above the bar (default true) */
  showLabel?: boolean;
}
