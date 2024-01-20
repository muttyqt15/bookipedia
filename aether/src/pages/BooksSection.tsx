"use client"
import Card from "@/components/elements/Card";
import React, { useState } from "react";
import useBooksData from "../hooks/useBooksData";
import { Book } from "@/types/posts";

const BooksSection = () => {
  const booksData = useBooksData();
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center w-full ">
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
