import api from "../lib/axios.js";

// Generic GET request helper
const get = (url, params = {}) => {
  return api
    .get(url, { params: { ...api.defaults.params, ...params } })
    .then((res) => res.data);
};

export const fetchBooks = (query, page = 1) => {
  return get("", { search: query, page });
};

export const fetchBooksByCategory = (category, page = 1) => {
  return get("", { topic: category, page });
};

export const fetchBookDetails = (bookId) => {
  return get(`${bookId}`);
};

export const fetchDefaultBooks = (page = 1) => {
  return get("", { page });
};

export const fetchBooksByLanguage = (language, page = 1) => {
  return get("", { languages: language, page });
};
