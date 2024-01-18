import Link from "next/link";
import React from 'react'
import "@/styles/fonts.css"

const NavLoggedOutElements = () => {
  return (
    <>
    <div className="flex items-center gap-4 milonga">
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign up</Link>
    </div>
    <div className="flex items-center gap-4">
      <Link href="/login"></Link>
      <Link href="/signup"></Link>
    </div>
    </>
  )
}

export default NavLoggedOutElements
