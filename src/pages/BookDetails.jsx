import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBookDetails } from "../hooks/useGutendex";

function BookDetails() {
  const { bookId } = useParams();
  const { data, isLoading, isError } = useBookDetails(bookId);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (data) {
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setIsFavorite(favorites.some((b) => b.id === data.id));
    }
  }, [data]);

  const toggleFavorite = (book) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.some((b) => b.id === book.id)) {
      // Remove from favorites
      const updated = favorites.filter((b) => b.id !== book.id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
    } else {
      // Add to favorites
      favorites.push(book);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  if (isLoading) return <p>Loading book details...</p>;
  if (isError) return <p>Error fetching book details.</p>;
  if (!data) return <p>Book not found.</p>;

  const { title, authors, formats, subjects, download_count, summaries } = data;
  const cover = formats["image/jpeg"] || "";

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{title}</h2>
      {authors?.length > 0 && <p>By {authors.map((a) => a.name).join(", ")}</p>}
      {cover && <img src={cover} alt={title} style={{ width: "300px" }} />}
      {subjects?.length > 0 && <p>Subjects: {subjects.join(", ")}</p>}

      {summaries?.length > 0 ? (
        summaries.map((s, i) => (
          <p key={i} style={{ fontStyle: "italic" }}>
            {s}
          </p>
        ))
      ) : (
        <p>No summary available.</p>
      )}

      <p>Download count: {download_count}</p>
      <button
        onClick={() => toggleFavorite(data)}
        style={{
          backgroundColor: isFavorite ? "#4caf50" : "#2196f3",
          color: "#fff",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {isFavorite ? "Added to Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default BookDetails;
