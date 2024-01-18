import { Post } from "@prisma/client";
import { prisma } from "../db";

export const create = async (data: Post) => {
  try {
    const post = await prisma.post.create({
      // Don't forget to npx prisma generate if made any changes to schema.prisma
      data: {
        title: data.title,
        description: data.description,
        content: data.content,
        createdById: data.createdById, // Required relationship
        image: data.image
      },
    });
    return post;
  } catch (err) {
    console.error(err);
  }
};

export const getOne = async (id: string) => {
  try {
    const post = await prisma.post.findUnique({
      // Returns a single post details
      where: {
        id: id,
      },
    });
    return post;
  } catch (error) {
    console.error(error);
  }
};

export const getAll = async () => {
    try {
        const posts = await prisma.post.findMany();
        return posts
      } catch (error) {
        console.error(error);
      }
}

export const getUserBooks = async (userId: string) => {
    try {
      const posts = prisma.post.findMany({
        where: {
          createdById: userId,
        },
      });
      return posts
    } catch (err) {
      console.error(err);
    }
  };
export const update = async (postId: string, content: string) => {
  try {
    const post = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        content: content,
      },
    });
    return post;
  } catch (error) {
    console.error(error);
  }
};
