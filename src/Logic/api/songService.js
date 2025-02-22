import axios from "axios";
import { ServerIpContext } from "../../contexts/ServerIpContext";

export const fetchSongs = async () => {
  try {
    const { serverIp } = useContext(ServerIpContext);

    const response = await axios.get(`${serverIp}/api/songs`);

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
