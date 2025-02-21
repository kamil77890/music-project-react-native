import axios from "axios";
const API_URL = "http://192.168.88.36:5000";

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/songs`);

    const formattedSongs = response.data.map((item) => {
      const key = Object.keys(item)[0];
      return { id: key, ...item[key] };
    });

    return formattedSongs;
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error;
  }
};
