import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BookList from "../components/BookList";
import Pagination from "../components/Pagination";
import { useCategoryBooks } from "../hooks/useGutendex";

function Category() {
  const { categoryName } = useParams();
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useCategoryBooks(categoryName, page);

  const totalPages = data ? Math.ceil(data.count / 32) : 1;

  return (
    <div className="category-page">
      <h2 className="category-title">Category: {categoryName}</h2>

      <BookList
        books={data?.results || []}
        isLoading={isLoading}
        isError={isError}
      />

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
}

export default Category;
