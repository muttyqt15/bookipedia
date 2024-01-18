import React from "react";
import "@/styles/fonts.css";
import Image from "next/image";
interface CardProps {
  title: string;
  description: string;
  image?: string;
  author: string;
}
const Card = ({ title, description, image, author }: CardProps) => {
  return (
    <button className="text-[#3E3232] hover:scale-95 relative flex flex-col w-64 h-96 bg-[#C19A6B] border rounded-xl border-none text-2xl m-4 p-2 hover:shadow-md transition-all">
      <section className="relative h-2/3 w-full border rounded-xl border-none">
        <Image src={image!} alt="" fill objectFit="cover" className="border rounded-xl border-none"/>
      </section>
      <h1 className="mt-2 font-bold sniglet text-[#5C4033]">{title}</h1>
      <p className="text-sm">{description}</p>
      <p className="text-xs absolute bottom-2 right-2">{author}</p>
    </button>
  );
};

export default Card;
