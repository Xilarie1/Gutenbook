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

  if (isLoading) return <p className="loading">Loading book details...</p>;
  if (isError) return <p className="error">Error fetching book details.</p>;
  if (!data) return <p className="not-found">Book not found.</p>;

  const { title, authors, formats, subjects, download_count, summaries } = data;
  const cover = formats?.["image/jpeg"] || "";

  return (
    <div className="book-details">
      <h2 className="book-title">{title}</h2>

      {authors?.length > 0 && (
        <p className="book-authors">
          By {authors.map((a) => a.name).join(", ")}
        </p>
      )}

      {cover && <img src={cover} alt={title} className="book-cover" />}

      {subjects?.length > 0 && (
        <p className="book-subjects">Subjects: {subjects.join(", ")}</p>
      )}

      <div className="book-summaries">
        {summaries?.length > 0 ? (
          summaries.map((s, i) => (
            <p key={i} className="book-summary">
              {s}
            </p>
          ))
        ) : (
          <p className="book-summary">No summary available.</p>
        )}
      </div>

      <p className="book-downloads">Download count: {download_count}</p>

      <button
        onClick={() => toggleFavorite(data)}
        className={isFavorite ? "favorite-btn added" : "favorite-btn"}
      >
        {isFavorite ? "Added to Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}

export default BookDetails;
