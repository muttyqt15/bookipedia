import Wrapper from "@/components/Wrapper";
import React from "react";
import { Book, BookOpen, Pencil } from "lucide-react";
import "@/styles/fonts.css";
import { AuthGuard } from "@/api/AuthGuard";
import Link from "next/link";
const Home = () => {
  return (
    <AuthGuard>
      <Wrapper className="items-center mt-28">
        <section>
          <h1 className="text-3xl md:text-6xl font-bold text-center titan text-[#5C4033]">
            <span className="hover:text-transparent animate-ease text-white">
              Congrats.
            </span>{" "}
            You&apos;re in the{" "}
            <span className="hover:text-[#B0A695] cursor-default hover:tracking-wide transition-all transform duration-1000">
              Secret Book Club
            </span>
            .
          </h1>
          <p className="pl-2 sniglet text-xl lg:text-3xl text-[#5C4033] text-center mt-6 w-full">
            Have fun.
          </p>
        </section>
        <section className="mt-24">
          <Link
            href="/onboarding/books"
            className="flex items-center border-transparent titan justify-center gap-2 hover:text-[#5C4033] hover:bg-white text-white hover:shadow-md shadow-xl bg-[#776B5D] px-4 py-1 border text-2xl animate-ease"
            style={{ borderRadius: 6 }}>
            <Pencil className="w-4 h-4" />
            Start creating! <Book className="w-4 h-4" />
          </Link>
        </section>
      </Wrapper>
    </AuthGuard>
  );
};

export default Home;
