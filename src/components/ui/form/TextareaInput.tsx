import type { TextInputProps } from "@/types/text-input";
import type { FieldValues } from "react-hook-form";

const TextareaInput = <T extends FieldValues>({
  name,
  register,
  errors,
  label,
  placeholder,
  isRequired = true,
}: TextInputProps<T>) => {
  const errorMessage = errors?.[name]?.message as string | undefined;
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={name}
        className={`transition-colors ease-linear duration-200 text-sm font-medium ${
          errors[name] ? "text-red-500" : "text-gray-500"
        }`}
      >
        {label}{" "}
        {isRequired ? <span className="text-sm text-red-500">*</span> : null}
      </label>
      <textarea
        id={name}
        rows={7}
        placeholder={placeholder}
        {...register(name)}
        className={`border-b py-2 transition-colors ease-linear duration-200 outline-none text-sm ${
          errorMessage ? "border-red-500 text-red-500" : "border-gray-200"
        }`}
      />
      {errorMessage && (
        <p className="mt-1 text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default TextareaInput;
