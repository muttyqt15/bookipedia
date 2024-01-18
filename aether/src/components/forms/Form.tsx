"use client";
import React, { useState } from "react";
import { cn } from "../lib/utils";
import { FormProps } from "@/types/form";
import FormField from "./FormField";
import "@/styles/fonts.css";

const Form = (p: FormProps & { className?: string } & { buttonPrompt: string }) => {
  const getInitialState = () => {
    let initialState: any = {};
    p.fields.forEach((field) => {
      initialState[field.property] = field.value;
    });
    return initialState;
  };
  const [state, setState] = useState(getInitialState());
  const handleChange = (property: string, value: string | boolean) => {
    setState((state: any) => ({ ...state, [property]: value })); // 
  };

  const handleSubmit = () => {
      p.onSubmit(state);
      setState(getInitialState());
  };
  return (
    <>
      <section className={cn("max-w-72 p-4 rounded-xl text-[#722F37] bg-[#F5DEB3] font-mono shadow-[#722F37] shadow-inner", p.className)}>
        <form className="flex flex-col">
          {p.fields.map((field, i) => {
            return (
              <FormField
                key={i}
                {...field}
                onChange={handleChange}
                value={state[field.property]}
                className="m-2"
              />
            );
          })}
        </form>
        <div className="flex justify-between items-center mt-4">
          <button
            type="submit"
            onClick={handleSubmit}
            className="hover:text-transparent transition-all transform duration-1000 hover:cursor-none">
            {p.buttonPrompt}
          </button>
        </div>
      </section>
    </>
  );
};

export default Form;
