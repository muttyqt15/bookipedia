import { getAllBooks } from "@/api/actions";
import Wrapper from "@/components/Wrapper";
import React from "react";
import "@/styles/fonts.css";
import StoryArea from "@/components/forms/StoryArea";
import { AuthGuard } from "@/api/AuthGuard";
interface Book {
  id: string;
  title: string;
  description: string;
  content?: string;
  createdById: string;
}

export async function generateStaticParams() {
  const books: Book[] = await getAllBooks();
  if (!books) return [];
  const bookIds = books.map((book) => book.id);
  return bookIds.map((bookId) => {
    return {
      bookId,
    };
  });
}

const ContentPage = ({ params }: { params: { bookId: string } }) => {
  // const [bookData, setBookData] = useState<Book>();
  // const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const bookData = await getUniqueBook(params.bookId);
  //     console.log(bookData);
  //     setBookData(bookData);
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <AuthGuard>
      <Wrapper className="items-center">
        <section className="flex flex-col">
          <h1 className="milonga capitalize text-2xl ml-6 mb-4">
            {/* {bookData?.title} */}
          </h1>
          <StoryArea bookId={params.bookId} />
        </section>
      </Wrapper>
    </AuthGuard>
  );
};

export default ContentPage;
