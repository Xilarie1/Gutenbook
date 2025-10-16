import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BookList from "../components/BookList";
import Pagination from "../components/Pagination";
import { useDefaultBooks, useSearchBooks } from "../hooks/useGutendex";

function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = query
    ? useSearchBooks(query, page)
    : useDefaultBooks(page);

  // Reset page to 1 whenever query changes
  useEffect(() => setPage(1), [query]);

  const totalPages = data?.count ? Math.ceil(data.count / 32) : 1;

  return (
    <div className="home-page">
      {query && <p>Search results for "{query}"</p>}
      <BookList books={data?.results} isLoading={isLoading} isError={isError} />
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}

export default Home;
