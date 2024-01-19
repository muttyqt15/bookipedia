// components/BookForm.js

import React, { useState } from 'react';
import { cn } from "../lib/utils";
import { BookFormProps } from "@/types/form";
import FormField from "./FormField";
import "@/styles/fonts.css";

const BookForm = (p: BookFormProps & { className?: string }) => {
  const [state, setState] = useState({
    title: '',
    description: '',
  });

  const handleChange = (property: string, value: string | boolean) => {
    setState(prevState => ({ ...prevState, [property]: value }));
  };

  const handleSubmit = () => {
    p.onSubmit(state);
    setState({
      title: '',
      description: '',
    });
  };

  return (
    <section className={cn("max-w-72 p-4 rounded-xl text-[#722F37] bg-[#F5DEB3] shadow-[#722F37] shadow-inner milonga tracking-wide", p.className)}>
      <form className="flex flex-col gap-2">
        <FormField
          type="text"
          name="Title"
          placeholder="Title"
          property="title"
          value={state.title}
          required={true}
          onChange={handleChange}
        />
        <FormField
          type="text"
          name="Description"
          placeholder="Description"
          property="description"
          value={state.description}
          required={true}
          onChange={handleChange}
        />
      </form>
      <div className="flex justify-between items-center mt-4">
        <button
          type="button" // It's better to specify the type as 'button' to avoid unintentional form submissions
          onClick={handleSubmit}
          className="tracking-tightest hover:text-yellow-700 hover:tracking-widest transition-all transform duration-1000 hover:cursor-none"
        >
          Create Book
        </button>
      </div>
    </section>
  );
};

export default BookForm;
