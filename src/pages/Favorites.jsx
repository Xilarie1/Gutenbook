import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";
import Pagination from "../components/Pagination";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 8; // number of favorites per page

  // Load favorites from localStorage on mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Remove a book by ID
  const removeFavorite = (bookId) => {
    const updated = favorites.filter((b) => b.id !== bookId);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  // Pagination logic
  const totalPages = Math.ceil(favorites.length / itemsPerPage);
  const paginatedFavorites = favorites.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="favorites-page">
      <h2 className="favorites-title">Favorites</h2>

      {favorites.length === 0 ? (
        <p className="no-favorites">No favorite books yet.</p>
      ) : (
        <>
          <BookList
            books={paginatedFavorites}
            removeFavorite={removeFavorite}
          />

          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={(newPage) => setPage(newPage)}
          />
        </>
      )}
    </div>
  );
}

export default Favorites;
