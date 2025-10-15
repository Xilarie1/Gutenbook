import React from "react";
import { useParams } from "react-router-dom";
import BookList from "../components/BookList";
import { useCategoryBooks } from "../hooks/useGutendex";

function Category() {
  const { categoryName } = useParams();
  const { data, isLoading, isError } = useCategoryBooks(categoryName);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Category: {categoryName}</h2>

      <BookList books={data?.results} isLoading={isLoading} isError={isError} />
    </div>
  );
}

export default Category;
