import api from "../lib/axios.js";

// Generic GET request helper
const get = (url, params = {}) => {
  return api
    .get(url, { params: { ...api.defaults.params, ...params } })
    .then((res) => res.data);
};

export const fetchBooks = (query, page = 1) => {
  return get("/books", { search: query, page });
};

export const fetchBooksByCategory = (category, page = 1) => {
  return get("/books", { topic: category, page });
};

export const fetchBookDetails = (bookId) => {
  return get(`/books/${bookId}`);
};

export const fetchDefaultBooks = (page = 1) => {
  return get("/books", { page });
};

export const fetchBooksByLanguage = (language, page = 1) => {
  return get("/books", { languages: language, page });
};
