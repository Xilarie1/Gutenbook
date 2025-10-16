import BookCard from "./BookCard";
import "./BookList.css";

function BookList({ books, isLoading, isError, removeFavorite }) {
  if (isLoading) return <p>Loading books...</p>;
  if (isError) return <p>Error fetching books.</p>;
  if (!books || books.length === 0) return <p>No books found.</p>;

  return (
    <div className="booklist-container">
      {books.map((book) => (
        <BookCard key={book.id} book={book} removeFavorite={removeFavorite} />
      ))}
    </div>
  );
}

export default BookList;
