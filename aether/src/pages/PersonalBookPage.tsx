"use client";

import { createBook } from "@/api/actions";
import Wrapper from "@/components/Wrapper";
import BookForm from "@/components/forms/BookForm";
import { useAuthContext } from "@/context/useAuthContext";
import { Book } from "@/types/posts";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
// Optimize nanti
const PersonalBookPage = () => {
  const userJSON = localStorage.getItem("userData");
  const userData = userJSON ? JSON.parse(userJSON) : null;
  const router = useRouter();
  const handleCreate = async (data: Book) => {
    if (userData) {
      const { title, description } = data;
      const response = await createBook({
        title,
        description,
        createdById: userData.id,
      });
      router.push(`./books/${response.id}`);
    } else {
      console.error("Unauthorized!");
    }
  };
  return (
    <Wrapper className="">
      <section className="flex flex-col justify-center w-2/3 items-center h-full">
        <div className="w-56 h-72 border bg-gray-900 rounded-xl">
          {/* For book profile image */}
        </div>
        <BookForm onSubmit={handleCreate} />
      </section>
    </Wrapper>
  );
};

export default PersonalBookPage;
