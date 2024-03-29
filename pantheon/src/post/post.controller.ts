import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  getBooksByUser,
  updateBook,
} from "./post.services";
const router = express.Router();

// TODO: FIX MIDDLEWARE AUTH

// Allows user to create a post
router.post("/", async (req, res) => { // TODO: Should be cookie validated but isnt, there's an error
  const bookData = req.body;
  console.log('bookData', bookData, 'test')
  if (!bookData) {
    return res.status(400).json({ error: "No book data provided" });
  }
  // if (!bookData.createdById) {
  //   return res.status(400).json({ error: "No user Id provided" });
  // }

  const post = await createBook(bookData);
  return res.status(201).json(post);
});


router.get("/:id",  async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "No post Id provided" });
  }
  const post = await getBook(id);
  return res.status(200).json(post);
});

// Update content of a book
router.patch("/:id", async (req, res) => {
  // Should hav, but there's some bug ?!!!
  // There is a user Id called createdById in the post table
  const postId = req.params.id;
  if (!postId) {
    return res.status(400).json({ error: "No post Id provided" });
  }
  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ error: "No content provided" });
  }

  const updatedBook = await updateBook(postId, content);
  if (!updatedBook) {
    return res.status(400).json({ error: "No book found" });
  }
  return res.status(200).json(updatedBook);
});

// Get all posts
router.get("/", async (req, res) => {
  const allBooks = await getAllBooks();
  return res.status(200).json(allBooks);
});

router.delete("/:id",  async (req, res) => {
  const postId = req.params.id;
  if (!postId) {
    return res.status(400).json({ error: "No post Id provided" });
  }
  const deletionStatus = await deleteBook(postId);
  if (deletionStatus) {
    return res.status(200).json({ message: "Post deleted successfully" });
  }
});
// Get users posts
router.get("/:id", async (req, res) => {
  const userId = req.params.id;
  if (!userId) {
    return res.status(400).json({ error: "No user Id provided" });
  }
  const userBooks = await getBooksByUser(userId);
  return res.status(200).json(userBooks);
});

export default router;
