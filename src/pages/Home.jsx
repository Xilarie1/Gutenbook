import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import BookList from "../components/BookList";
import { useSearchBooks, useDefaultBooks } from "../hooks/useGutendex";

function Home() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search") || "";

  const [page, setPage] = useState(1);

  // Fetch books depending on whether there's a search query
  const { data, isLoading, isError } = searchQuery
    ? useSearchBooks(searchQuery, page)
    : useDefaultBooks(page);

  const totalPages = data?.count ? Math.ceil(data.count / 32) : 1; // Gutendex default 32 per page

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Home Page</h2>
      {searchQuery ? (
        <p>Showing results for "{searchQuery}"</p>
      ) : (
        <p>Welcome! Here are some popular or latest books.</p>
      )}

      <BookList books={data?.results} isLoading={isLoading} isError={isError} />

      {/* Pagination controls */}
      <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
