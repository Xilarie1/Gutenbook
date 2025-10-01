import { useParams } from "react-router-dom";

function BookDetails() {
  const { bookId } = useParams();

  return (
    <div>
      <h2>Book Details: {bookId}</h2>
      <p>This page will show detailed information for this book.</p>
    </div>
  );
}

export default BookDetails;
