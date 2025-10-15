import React from "react";
import { useParams } from "react-router-dom";
import { useBookDetails } from "../hooks/useGutendex";

function BookDetails() {
  const { bookId } = useParams();
  const { data, isLoading, isError } = useBookDetails(bookId);

  const addToFavorites = (book) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.find((b) => b.id === book.id)) {
      favorites.push(book);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  if (isLoading) return <p>Loading book details...</p>;
  if (isError) return <p>Error fetching book details.</p>;

  const { title, authors, formats, subjects, download_count } = data;
  const cover = formats["image/jpeg"] || "";

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{title}</h2>
      {authors && <p>By {authors.map((a) => a.name).join(", ")}</p>}
      {cover && <img src={cover} alt={title} style={{ width: "300px" }} />}
      {subjects && <p>Subjects: {subjects.join(", ")}</p>}
      <p>Download count: {download_count}</p>
      <button onClick={() => addToFavorites(data)}>Add to Favorites</button>
    </div>
  );
}

export default BookDetails;
