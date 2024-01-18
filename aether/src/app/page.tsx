import Wrapper from '@/components/Wrapper'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  
  return (
    <Wrapper className="items-center mt-64">
        <section>
          <h1 className="text-3xl md:text-6xl xl:text-9xl font-bold text-center titan text-[#5C4033]">
            <span className="hover:text-transparent animate-ease text-white">
              ????
            </span>{" "}
            Are you {" "}
            <span className="hover:text-[#B0A695] animate-ease cursor-default">
              lost
            </span>
            ?
          </h1>
          <p className="pl-2 sniglet text-xl lg:text-3xl text-[#5C4033]">
            Or do you have the <span className="hover:text-transparent animate-ease"> 
              <Link href="/login">
              secret code?
              </Link>
            </span>
          </p>
        </section>
        <section className="mt-24">
          <button
            className="flex items-center border-transparent justify-center gap-2 text-white bg-[#776B5D] px-4 py-1 border text-2xl hover:bg-[#B0A695] animate-ease"
            style={{ borderRadius: 6 }}>
            {/* Get started <BookOpen className="w-4 h-4" /> */}
          </button>
        </section>
      </Wrapper>
  )
}

export default Home
