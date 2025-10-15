import React from "react";
import { useLocation } from "react-router-dom";
import BookList from "../components/BookList";
import { useSearchBooks } from "../hooks/useGutendex";

function Home() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search") || "";

  // Fetch books based on the search query
  const { data, isLoading, isError } = useSearchBooks(searchQuery);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Home Page</h2>
      {searchQuery ? (
        <p>Showing results for "{searchQuery}"</p>
      ) : (
        <p>Welcome! Here are some popular or latest books.</p>
      )}

      <BookList books={data?.results} isLoading={isLoading} isError={isError} />
    </div>
  );
}

export default Home;
