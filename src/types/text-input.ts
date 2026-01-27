import { type HTMLInputTypeAttribute } from "react";
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

export interface TextInputProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  isRequired?: boolean;
}
