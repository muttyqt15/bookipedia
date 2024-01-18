"use client"
import Card from "@/components/elements/Card";
import React from "react";
import useBooksData from "../hooks/useBooksData";

const BooksSection = () => {
  const booksData = useBooksData();
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
      {booksData.map((book) => (
        <Card
          key={book.id}
          title={book.title}
          description={book.description.length >= 47
            ? book.description.substring(0, 50) + "..."
            : book.description}
          image={book.image}
          author={book.author.username} /> 
      ))}
    </section>
  );
};

export default BooksSection;
