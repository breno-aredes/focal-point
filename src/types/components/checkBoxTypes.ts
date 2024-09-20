export interface CheckboxProps {
  task: string;
  isChecked: boolean;
  onCheckChange: (task: string, isChecked: boolean) => void;
}
