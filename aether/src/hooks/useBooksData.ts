"use client"
import { useEffect, useState } from "react";
import { getAllBooks, getAuthorWithBooks } from "@/api/actions";
import { Book } from "@/types/posts";
import { User } from "@/types/user";

const useBooksData = () => {
  const [booksData, setBooksData] = useState<(Book & { author: User })[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const books: Book[] = await getAllBooks();
      const data = await getAuthorWithBooks(books);
      setBooksData(data);
    };

    fetchData();
  }, []);

  return booksData;
};
export default useBooksData;