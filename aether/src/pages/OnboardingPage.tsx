import Wrapper from "@/components/Wrapper";
import React from "react";
import { BookOpen } from "lucide-react";
import "@/styles/fonts.css";
import { AuthGuard } from "@/api/AuthGuard";
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
          <p className="pl-2 sniglet text-xl lg:text-3xl text-[#5C4033]">
            Have fun.
          </p>
        </section>
        <section className="mt-24">
          <button
            className="flex items-center border-transparent justify-center gap-2 text-white bg-[#776B5D] px-4 py-1 border text-2xl hover:bg-[#B0A695] animate-ease"
            style={{ borderRadius: 6 }}>
            Get started <BookOpen className="w-4 h-4" />
          </button>
        </section>
      </Wrapper>
    </AuthGuard>
  );
};

export default Home;
