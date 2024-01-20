"use client";
import React, { useEffect } from "react";
import "@/styles/fonts.css";
import Image from "next/image";
import { Pencil, TrashIcon } from "lucide-react";
import { deleteBook } from "@/api/actions";
import { useRouter } from "next/navigation";
import { User } from "@/types/user";
interface CardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  author: User;
}
const Card = ({ id, title, description, image, author }: CardProps) => {
  const [userOwns, setUserOwns] = React.useState(false);
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const userJSON = userData ? JSON.parse(userData) : null;
    console.log(userJSON)
    if (userJSON?.id === author.id) { 
      setUserOwns(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const router = useRouter();

  const handleDelete = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    await deleteBook(id);
    console.log("deleted");
  };

  const handleEdit = async (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    router.push(`/onboarding/books/${id}`);
    console.log("clicked!");
  };

  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    router.push(`/public-books/${id}`);
  };
  return (
    <button
      onClick={handleClick}
      className="text-[#3E3232] hover:scale-95 relative flex flex-col w-80 h-96 md:w-72 md:h-96 bg-[#C19A6B] border rounded-xl border-none text-2xl m-4 p-2 hover:shadow-md transition-all">
      <section className="relative h-2/3 w-full border rounded-xl border-none">
        <Image
          src={image!}
          alt=""
          fill
          objectFit="cover"
          className="border rounded-xl border-none"
        />
      </section>
      <h1 className="mt-2 text-xl font-bold sniglet text-[#5C4033]">{title}</h1>
      <p className="text-sm">{description}</p>
      {userOwns && (
        <>
          <button
            className="text-[#5C4033] hover:text-red-950 hover:animate-pulse absolute bottom-2 left-2"
            onClick={handleDelete}>
            <TrashIcon className="w-4 h-4" />
          </button>
          <button
            className="text-[#5C4033] hover:text-red-950 hover:animate-pulse absolute bottom-2 left-8"
            onClick={handleEdit}>
            <Pencil className="w-4 h-4" />
          </button>
        </>
      )}
      <p className="text-xs absolute bottom-2 right-2 hidden md:flex">{author.username}</p>
    </button>
  );
};

export default Card;
