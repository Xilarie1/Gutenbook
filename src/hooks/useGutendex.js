import { useQuery } from "@tanstack/react-query";
import {
  fetchBooks,
  fetchBooksByCategory,
  fetchBookDetails,
} from "../services/gutendex.js";

// Hook for searching books
export const useSearchBooks = (query, page = 1) => {
  return useQuery(
    ["searchBooks", query, page], // query key
    () => fetchBooks(query, page), // query function
    {
      enabled: !!query, // don't fetch if query is empty
      keepPreviousData: true, // keeps old data while fetching new
    }
  );
};

// Hook for fetching books by category
export const useCategoryBooks = (category, page = 1) => {
  return useQuery(
    ["categoryBooks", category, page],
    () => fetchBooksByCategory(category, page),
    {
      enabled: !!category,
      keepPreviousData: true,
    }
  );
};

// Hook for fetching a single book's details
export const useBookDetails = (bookId) => {
  return useQuery(["bookDetails", bookId], () => fetchBookDetails(bookId), {
    enabled: !!bookId,
  });
};
