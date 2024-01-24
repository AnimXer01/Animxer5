const axios = require("axios");

const baseUrl = `https://anime-sensei-api.vercel.app/anime/gogoanime`;
export const makeRequest = async (endpoint, method = "GET", params = {}) => {
  try {
    const res = await axios({
      method,
      url: `${baseUrl}${endpoint}`,
      params,
    });
    return res;
  } catch (error) {
    return [];
  }
};
