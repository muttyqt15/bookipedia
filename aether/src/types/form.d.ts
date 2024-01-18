export interface FormFieldProps {
  type: "text" | "password" | "checkbox" | "email";
  name: string;
  placeholder: string;
  property: string;
  value: string | boolean;
  checked?: boolean;
  className?: string;
  required: boolean;
}

export interface FormProps {
  fields: Array<FormItemProps>;
  onSubmit: <T extends User>(data: T) => void;
}

export interface BookFormProps {
  onSubmit: <T extends Book>(data: T) => void;
}

export interface OutputProps {
  onChange: (property: string, value: string | boolean) => void;
}
