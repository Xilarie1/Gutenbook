import api from "../lib/axios.js";

// Generic GET request helper
const get = async (url, params = {}) => {
  const response = await api.get(url, {
    params: { ...api.defaults.params, ...params },
  });
  return response.data;
};

export const fetchBooks = async (query, page = 1) => {
  return await get("", { search: query, page });
};

export const fetchBooksByCategory = async (category, page = 1) => {
  return await get("", { topic: category, page });
};

export const fetchBookDetails = async (bookId) => {
  return await get(`${bookId}`);
};

export const fetchDefaultBooks = async (page = 1) => {
  return await get("", { page });
};

export const fetchBooksByLanguage = async (language, page = 1) => {
  return await get("", { languages: language, page });
};
