import { useQuery } from "@tanstack/react-query";
import {
  fetchBooks,
  fetchBooksByCategory,
  fetchBookDetails,
  fetchDefaultBooks,
} from "../services/gutendex.js";

export const useDefaultBooks = (page = 1) => {
  return useQuery({
    queryKey: ["defaultBooks", page],
    queryFn: () => fetchDefaultBooks(page),
    keepPreviousData: true,
  });
};

// Hook for searching books
export const useSearchBooks = (query, page = 1) => {
  return useQuery({
    queryKey: ["searchBooks", query, page],
    queryFn: () => fetchBooks(query, page),
    enabled: !!query,
    keepPreviousData: true,
  });
};

// Hook for fetching books by category
export const useCategoryBooks = (category, page = 1) => {
  return useQuery({
    queryKey: ["categoryBooks", category, page],
    queryFn: () => fetchBooksByCategory(category, page),
    enabled: !!category,
    keepPreviousData: true,
  });
};

// Hook for fetching a single book's details
export const useBookDetails = (bookId) => {
  return useQuery({
    queryKey: ["bookDetails", bookId],
    queryFn: () => fetchBookDetails(bookId),
    enabled: !!bookId,
  });
};
