import api from "../lib/axios.js";

// Modular get function that accepts different parameters
const get = (url, params = {}) => {
  return api
    .get(url, { params: { ...api.defaults.paramsSerializer, ...params } })
    .then((result) => result.data);
};
