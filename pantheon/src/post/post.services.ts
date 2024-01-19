import { Post } from "@prisma/client";
import { create, deleteAction, getAll, getOne, getUserBooks, update } from "./post.repository";

export const createBook = async (data: Post) => {
  const book = await create(data);
  return book;
};

export const getBook = async (id: string) => {
  const book = await getOne(id);
  return book;
};

export const deleteBook = async(id: string) => {
  const deletionStatus = deleteAction(id)
  return deletionStatus;
}
export const updateBook = async (id: string, content: string) => {
  const book = await update(id, content);
  return book;
};

export const getBooksByUser = async (userId: string) => {
    const books = await getUserBooks(userId);
    return books;
}
export const getAllBooks = async () => {
  const books = await getAll();
  return books;
};
