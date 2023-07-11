type SubNav = {
  name: string;
  path: string;
  icon: React.ReactNode;
  borderBottom: boolean;
};

export interface InputObj {
  isInvalid?: boolean;
  name: string;
  register?: UseFormRegisterReturn /* Record<string | number, string | number> */;
  type: string;
  label: string;
  options?: Record<'value' | 'name', string>[];
  error?: FieldError;
  size?: string;
  placeholder?: string;
  disabled?: boolean;
  helperMessage?: string;
  defaultValue?: string | number | readonly string[] | undefined;
  onChange?: (
    values:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | Record<string, Date>
  ) => void;
}
