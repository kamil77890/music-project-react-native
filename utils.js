import axios from "axios";

export const getDuration = (song) => {
  const duration = song.contentDetails.duration;
  const re = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const match = duration.match(re);

  if (match) {
    const [, hours = "0", minutes = "0", seconds = "0"] = match;
    const totalMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);
    return {
      minutes: totalMinutes.toString(),
      seconds: seconds,
    };
  } else {
    return { minutes: undefined, seconds: undefined };
  }
};

export const gettingSongsIds = async (serverIp) => {
  try {
    const response = await axios.get(`${serverIp}/api/songs`);
    const data = response.data;

    const ids = data.map((item) => {
      const key = Object.keys(item)[0];
      return parseInt(key, 10);
    });

    const maxId = Math.max(...ids, 0);
    const newId = maxId + 1;

    return newId;
  } catch (error) {
    console.error("Error fetching song IDs:", error);
    throw error;
  }
};

export const sendData = async (data, serverIp) => {
  try {
    const response = await fetch(`${serverIp}/api/data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.error("Error sending data:", error);
  }
};
