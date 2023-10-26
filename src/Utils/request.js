const axios = require("axios");

const baseUrl = `https://api.consumet.org/anime/gogoanime`;
export const makeRequest = async (endpoint, method = "GET") => {
  try {
    const res = await axios({
      method,
      url: `${baseUrl}${endpoint}`,
    });
    return res;
  } catch (error) {
    return [];
  }
};
