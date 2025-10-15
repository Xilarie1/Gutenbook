import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFavorite = (bookId) => {
    const updated = favorites.filter((b) => b.id !== bookId);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite books yet.</p>
      ) : (
        <BookList books={favorites} />
      )}
    </div>
  );
}

export default Favorites;
