import BookCard from "./BookCard";

function BookList({ books, isLoading, isError, removeFavorite }) {
  if (isLoading) return <p>Loading books...</p>;
  if (isError) return <p>Error fetching books.</p>;
  if (!books || books.length === 0) return <p>No books found.</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: "1rem",
      }}
    >
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          removeFavorite={removeFavorite} // pass it down
        />
      ))}
    </div>
  );
}

export default BookList;
