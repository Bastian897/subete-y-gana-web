export interface InputProps {
  /** Field label shown above input */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Controlled value */
  value?: string;
  /** Change handler — receives string value */
  onChange?: (value: string) => void;
  /** HTML input type */
  type?: 'text' | 'email' | 'tel' | 'number' | 'password';
  /** Validation error message (turns border red) */
  error?: string;
  /** Helper text shown below (when no error) */
  helpText?: string;
  /** Disabled state */
  disabled?: boolean;
}
