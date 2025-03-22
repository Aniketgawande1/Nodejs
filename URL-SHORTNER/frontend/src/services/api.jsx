import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/url"; // Update if necessary

// Shorten a URL
export const shortenURL = async (originalUrl) => {
  try {
    const res = await axios.post(`${API_BASE_URL}/shorten`, { originalUrl });
    return res.data;
  } catch (error) {
    console.error("Error shortening URL:", error);
    throw error;
  }
};

// Get all shortened URLs
export const getURLs = async () => {
  try {
    const res = await axios.get(`${API_BASE_URL}/urls`);
    return res.data;
  } catch (error) {
    console.error("Error fetching URLs:", error);
    throw error;
  }
};
