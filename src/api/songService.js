import axios from "axios";
const API_URL = "http://192.168.141.1:5000";

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/songs`);

    // Formatowanie danych przed ich zwróceniem
    const formattedSongs = response.data.map((item) => {
      const key = Object.keys(item)[0]; // pobieramy klucz (np. "1", "2")
      return { id: key, ...item[key] }; // tworzymy obiekt, gdzie id to klucz
    });

    return formattedSongs; // Zwracamy już przekształcone dane
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error;
  }
};
