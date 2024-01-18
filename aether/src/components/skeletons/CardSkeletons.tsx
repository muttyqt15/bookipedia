import React from "react";
import "@/styles/fonts.css"
const CardSkeleton = () => {
  return (
    <button className="text-[#3E3232] animate-pulse duration-1000 relative flex flex-col w-64 h-96 bg-[#b38c5c] border rounded-xl border-none text-2xl m-4 p-2 hover:shadow-xl transition-all">
    </button>
  );
};

export default CardSkeleton;
