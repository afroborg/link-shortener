export interface Data {
  active: boolean;
}

export interface Methods {
  updateValue: (e: Event) => void;
}

export interface Computed {
  isActive: boolean;
}

export interface Props {
  label: string;
  placeholder: string;
  icon: string;
  name: string;
  value: string;
  classes?: string;
  disabled: boolean;
}
