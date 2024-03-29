import { Book } from "@/types/posts";
import { User } from "@/types/user";
import Cookies from "js-cookie";
import "dotenv/config";
export const fetchData = async (url: RequestInfo, init?: RequestInit) => {
  const response = await fetch(url, init);
  if (response.ok) {
    return response.json();
  } else {
    console.error(response);
  }
};

export const authorizedFetch = async (
  url: RequestInfo,
  options?: RequestInit
) => {
  const token = Cookies.get("token");
  if (!token) {
    throw new Error("No token found");
  }
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    // Handle errors
    console.error("Request failed:", error);
    throw error;
  }
};
export const getAuthor = async (authorId: string) => {
  const response = await fetchData(
    `${process.env.NEXT_PUBLIC_BE_URL}/api/users/${authorId}`,
    { method: "GET" }
  );
  return response;
};

export const getAuthorWithBooks = async (books: Book[]) => {
  const res = await Promise.all(
    books.map(async (book) => {
      const author: User = await getAuthor(book.createdById); 
      return { ...book, author } as Book & { author: User };
    })
  );
  return res;
};

export const getUsers = async () => {
  const response = await fetchData(`${process.env.NEXT_PUBLIC_BE_URL}/api/users`, {
    method: "GET",
  });
  return response;
};

interface createBookTypes {
  title: string;
  description: string;
  createdById: string;
  content?: string;
}

export const deleteBook = async (id: string) => {
  const response = await fetchData(`${process.env.NEXT_PUBLIC_BE_URL}/api/posts/${id}`, {
    method: "DELETE",
  });
  return response;
};
export const createBook = async ({
  title,
  description,
  createdById,
}: createBookTypes) => {
  const response = await authorizedFetch(`${process.env.NEXT_PUBLIC_BE_URL}/api/posts`, {
    method: "POST",
    headers: {
      // "Authorization": `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      // credentials: 'include',
      // mode: 'cors',
    },
    body: JSON.stringify({ title, description, createdById }),
  });
  return response;
};

export const updateBookContent = async (content: string, bookId: string) => {
  const newContent = await authorizedFetch(
    `${process.env.NEXT_PUBLIC_BE_URL}/api/posts/${bookId}`,
    {
      method: "PATCH",
      headers: {
        // Authorization: `Bearer ${localStorage.getItem("token")}`, // For later authentication
        "Content-Type": "application/json",
      },
      body: JSON.stringify({content}),
    }
  );
  const jsonContent = await newContent.json();
  console.log(jsonContent, ":", newContent);
  return jsonContent;
};
export const getUniqueBook = async (bookId: string) => {
  const book = await fetchData(`${process.env.NEXT_PUBLIC_BE_URL}/api/posts/${bookId}`, {
    method: "GET",
  });
  return book;
};

export const getUsersBooks = async (createdById: string) => {
  const response = await fetchData(
    `${process.env.NEXT_PUBLIC_BE_URL}/api/posts/${createdById}`,
    { method: "GET" }
  );
  return response;
};

export const getAllBooks = async () => {
  const response = await fetchData(`${process.env.NEXT_PUBLIC_BE_URL}/api/posts`, {
    method: "GET",
  });
  return response;
};

export const fetchAllBooksWithAuthors = async (): Promise<Book[]> => {
  const books: Book[] = await getAllBooks();
  const booksWithAuthors = await getAuthorWithBooks(books);
  return booksWithAuthors;
};
