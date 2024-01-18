"use client";
import { updateBookContent } from "@/api/actions";
import { useRouter } from "next/navigation";
import React from "react";
import "@/styles/fonts.css"
const StoryArea = ({bookId}: {bookId: string}) => {
  const router = useRouter();
  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Access the textarea value using ref or other methods
    const contentValue = (
      e.currentTarget.elements.namedItem("content") as HTMLTextAreaElement
    ).value;
    const patchData = updateBookContent(contentValue, bookId);
    router.push(`/public-books`)
  };

  return (
    <div>
      <form onSubmit={handleSave} className="flex flex-col">
        <textarea
          id="content"
          className="w-[400px] lg:w-[700px] h-[500px] bg-[#C4A484] border rounded-xl p-4 outline-none shadow-inner shadow-slate-700 merienda italic"
        />
        <button
          type="submit"
          className="w-24 h-10 bg-slate-700 text-white rounded-xl mt-4 ml-6 border shadow-xl hover:bg-slate-600 transition-all">
          Save
        </button>
      </form>
    </div>
  );
};

export default StoryArea;
