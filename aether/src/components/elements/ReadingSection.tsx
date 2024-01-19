"use client";
import { getUniqueBook } from "@/api/actions";
import { Book } from "@/types/posts";
import React, { useEffect, useState } from "react";

const ReadingSection = ({ id }: { id: string }) => {
  const [book, setBook] = useState<Book | null>(null);
  useEffect(() => {
    (async () => {
      const fetchedBook = await getUniqueBook(id);
      setBook(fetchedBook);
    })();
  }, []);
  return (
    <div className="flexflex-col justify-center items-center w-full min-h-screen">
      {book && (
        <>
          <h1>{book.title}</h1>
          <p>{book.description}</p>
          <p>test{book.content}</p>
        </>
      )}
    </div>
  );
};

export default ReadingSection;
