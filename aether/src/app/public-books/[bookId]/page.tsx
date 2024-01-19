import { getAllBooks } from "@/api/actions";
import Wrapper from "@/components/Wrapper";
import ReadingSection from "@/components/elements/ReadingSection";
import { Book } from "@/types/posts";
import React from "react";

// export async function generateStaticParams() { // Failed at deployment?
//   const books: Book[] = await getAllBooks();
//   if (!books) return [];
//   const bookIds = books.map((book) => book.id);
//   return bookIds.map((bookId) => {
//     return {
//       bookId,
//     };
//   });
// }

const page = ({ params }: { params: { bookId: string } }) => {
  return (
    <Wrapper>
      <article>
        <ReadingSection id={params.bookId} />
      </article>
    </Wrapper>
  );
};

export default page;
