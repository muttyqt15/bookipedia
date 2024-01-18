"use client";
import { useAuthContext } from "@/context/useAuthContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLoggedinElements from "./NavLoggedinElements";
import NavLoggedOutElements from "./NavLoggedOut";

const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuthContext();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => (!window.scrollY ? setScroll(false) : setScroll(true)) // If not at top of page, set scroll to true
    );
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div
      className={`text-[#B0A695] fixed top-0 w-full transition-all titan tracking-wider z-50 ${
        scroll ? "scale-[0.99] top-2" : "scale-100"
      }`}>
      <div
        className="flex items-center justify-between bg-[#3E3232] px-4 py-3 shadow-lg"
        style={{ borderRadius: 6 }}>
        {isAuthenticated ? NavLoggedinElements() : NavLoggedOutElements()}
      </div>
    </div>
  );
};

export default Navbar;
