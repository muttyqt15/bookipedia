import React, { ChangeEvent } from "react";
import { cn } from "../lib/utils";
import { FormFieldProps, OutputProps } from "@/types/form";


function FormField(p: FormFieldProps & OutputProps & { className?: string }) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    p.onChange(p.property, e.target.value);
  };
  return (
    <>
      <label htmlFor={p.property} className="">
        {p.name}
        {p.required && <span className="text-red-500 text-xs"> *</span>}
      </label>
      <input
        type={p.type}
        name={p.name}
        placeholder={p.placeholder}
        id={p.property}
        value={p.value as string}
        checked={p.value as boolean} // Checks if form field is filled out
        required={p.required}
        onChange={handleChange}
        autoComplete="off"
        className={cn(
          "border-2 border-gray-300 focus:border-[#722F37] px-2 py-1 rounded-xl animate-ease",
          p.className
        )}
      />
    </>
  );
}

export default FormField;
