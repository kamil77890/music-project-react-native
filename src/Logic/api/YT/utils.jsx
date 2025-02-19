import axios from "axios";

const API_KEY = "AIzaSyAzy1Qf_lhA4snxKLL7FP6EmNGk7euZRIE";

export const DetailedData = async (songs) => {
    if (!songs || songs.length === 0) return [];

    const songIds = songs.map((song) => song.id.videoId).join(",");

    try {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/videos", {
            params: {
                part: "snippet,contentDetails",
                id: songIds,
                key: API_KEY,
            },
        });

        return response.data.items;
    } catch (error) {
        console.error("Error fetching detailed song data:", error);
        return [];
    }
};

export const getSongByString = async (userInput) => {
    if (!userInput.trim()) return [];

    try {
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search`,
            {
                params: {
                    part: "snippet",
                    maxResults: 5,
                    type: "video",
                    key: API_KEY,
                    q: userInput,
                },
            }
        );

        console.log("Search results:", response.data.items);

        const detailedSongs = await DetailedData(response.data.items);

        return detailedSongs;
    } catch (error) {
        console.error("Error fetching songs:", error);
        return [];
    }
};
