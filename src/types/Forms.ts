export interface InputLabelProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "placeholder"> {
  label?: string;
  id: string;
  type: string;
}

export interface InputRHF
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "placeholder"> {
  id: string;
  type: string;
  label?: string;
  watch?: any;
}