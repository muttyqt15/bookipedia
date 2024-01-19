import { Book } from "@/types/posts";
import { User } from "@/types/user";
import Cookies from "js-cookie";
export const fetchData = async (url: RequestInfo, init?: RequestInit) => {
  const response = await fetch(url, init);
  if (response.ok) {
    return response.json();
  } else {
    console.error(response);
  }
};

export const authorizedFetch = async (url: RequestInfo, options?: RequestInit) => {
  const token = Cookies.get("token");
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
    `http://localhost:5000/api/users/${authorId}`,
    { method: "GET" }
  );
  return response;
};

export const getAuthorWithBooks = async (books: Book[]) => {
  const res = await Promise.all(
    books.map(async (book) => {
      const author: User = await getAuthor(book.createdById); // Assuming there's an authorId in your Book type
      return { ...book, author } as Book & { author: User };
    })
  );
  return res;
};

export const getUsers = async () => {
  const response = await fetchData("http://localhost:5000/api/users", {
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
  const response = await fetchData(`http://localhost:5000/api/posts/${id}`, {
    method: "DELETE",
  });
  return response;
};
export const createBook = async ({
  title,
  description,
  createdById,
}: createBookTypes) => {
  const response = await fetchData("http://localhost:5000/api/posts", {
    method: "POST",
    headers: {
      // "Authorization": `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description, createdById }),
  });
  return response;
};

export const updateBookContent = async (content: string, bookId: string) => {
  const newContent = await fetchData(
    `http://localhost:5000/api/posts/${bookId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // For later authentication
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    }
  );
  return newContent;
};
export const getUniqueBook = async (bookId: string) => {
  const book = await fetchData(`http://localhost:5000/api/posts/${bookId}`, {
    method: "GET",
  });
  return book;
};

export const getUsersBooks = async (createdById: string) => {
  const response = await fetchData(
    `http://localhost:5000/api/posts/${createdById}`,
    { method: "GET" }
  );
  return response;
};

export const getAllBooks = async () => {
  const response = await fetchData("http://localhost:5000/api/posts", {
    method: "GET",
  });
  return response;
};

export const fetchAllBooksWithAuthors = async (): Promise<Book[]> => {
  const books: Book[] = await getAllBooks();
  const booksWithAuthors = await getAuthorWithBooks(books);
  return booksWithAuthors;
};
