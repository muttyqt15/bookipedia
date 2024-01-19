"use client"
import Card from "@/components/elements/Card";
import React, { useState } from "react";
import useBooksData from "../hooks/useBooksData";
import { Book } from "@/types/posts";

const BooksSection = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const booksData = useBooksData();
  
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
      {booksData.map((book) => (
        <Card
          key={book.id}
          id={book.id}
          title={book.title}
          description={book.description.length >= 47
            ? book.description.substring(0, 50) + "..."
            : book.description}
          image={book.image}
          author={book.author} /> 
      ))}
    </section>
  );
};

export default BooksSection;
