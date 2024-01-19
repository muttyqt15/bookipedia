"use client";

import { createBook } from "@/api/actions";
import Wrapper from "@/components/Wrapper";
import BookForm from "@/components/forms/BookForm";
import { useAuthContext } from "@/context/useAuthContext";
import { Book } from "@/types/posts";
import { User } from "@/types/user";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
// Optimize nanti
const PersonalBookPage = () => {
  const [userData, setUser] = useState<User | null>(null)
  useEffect(() => {
    const userJSON = localStorage.getItem("userData");
    const user = userJSON ? JSON.parse(userJSON) : null;
    setUser(user)
  }, []);
  const router = useRouter();
  const handleCreate = async (data: Book) => {
    if (userData) {
      const { title, description } = data;
      const response = await createBook({
        title,
        description,
        createdById: userData.id,
      });
      // 
      const res = await response.json() // MERESAHKANN!!!
      router.push(`./books/${res.id}`);
    } else {
      console.error("Unauthorized!");
    }
  };
  return (
    <Wrapper className="">
      <section className="flex flex-col justify-center items-center h-full">
        <BookForm onSubmit={handleCreate} />
      </section>
    </Wrapper>
  );
};

export default PersonalBookPage;
