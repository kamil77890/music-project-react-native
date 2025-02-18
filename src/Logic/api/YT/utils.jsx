import React, { useState } from "react";
import axios from "axios";



export const getSongByString = (userInput) => {
    const [songs, setSongs] = useState([]);

    const key = "AIzaSyAzy1Qf_lhA4snxKLL7FP6EmNGk7euZRIE";


    const fetchData = async () => {
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${key}&q=${userInput}`
        );
        setSongs(response.data.items);
    };
    fetchData()

    return DetailedData(songs)
}

export const DetailedData = (props) => {
    const { songs } = props;
    const [music, setMusic] = useState([]);
    const key = "AIzaSyAzy1Qf_lhA4snxKLL7FP6EmNGk7euZRIE";

    useEffect(() => {
        const songIds = songs.map((song) => song.id.videoId).join(",");
        if (songIds.length > 0) {
            const fetchData = async () => {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/videos`,
                    {
                        params: {
                            part: "snippet,contentDetails",
                            id: songIds,
                            key: key,
                        },
                    }
                );
                setMusic(response.data.items);
            };
            fetchData();
        }
    }, [songs]);

    return music;
};


