import axios from "axios";

const api = axios.create({
  baseURL: "https://gutendex.com/books",
  params: {
    language: "en",
  },
});

export default api;
