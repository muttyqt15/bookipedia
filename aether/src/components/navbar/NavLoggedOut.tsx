import Link from "next/link";
import React from "react";
import "@/styles/fonts.css";

const NavLoggedOutElements = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Link
          href="/public-books"
          className="hover:tracking-tighter transition-all transform duration-1000 ">
          View
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login">Login</Link>
        <Link href="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default NavLoggedOutElements;
