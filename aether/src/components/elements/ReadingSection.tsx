"use client";
import { getUniqueBook } from "@/api/actions";
import { Book } from "@/types/posts";
import React, { useEffect, useState } from "react";
import "@/styles/fonts.css";

const ReadingSection = ({ id }: { id: string }) => {
  const [book, setBook] = useState<Book | null>(null);
  useEffect(() => {
    (async () => {
      const fetchedBook = await getUniqueBook(id);
      setBook(fetchedBook);
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      {book && (
        <div className="p-4 border rounded-xl min-w-[320px] lg:w-[800px] min-h-[500px] bg-white flex flex-col items-center">
          <h1 className="text-xl titan">{book.title}</h1>
          <p className="">{book.description}</p>
          <div className="min-w-[300px] lg:w-[700px] bg-gray-300 h-fit min-h-[500px] rounded-xl shadow-inner shadow-slate-700 p-4">
            <p className="text-sm">{book.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadingSection;
