import { useAuthContext } from "@/context/useAuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NavLoggedinElements = () => {
  const router = useRouter();
  const { logout } = useAuthContext();
  const handleClick = () => {
    logout();
    router.push("/signup");
  };

  return (
    <>
      <div className="flex items-center gap-4">
        <Link
          href="/onboarding/books"
          className="hover:tracking-tighter transition-all transform duration-1000 ">
          Create
        </Link>
        <Link
          href="/public-books"
          className="hover:tracking-tighter transition-all transform duration-1000 ">
          View
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={handleClick}
          className="hover:tracking-widest transition-all transform duration-1000 ">
          Logout
        </button>
      </div>
    </>
  );
};

export default NavLoggedinElements;
