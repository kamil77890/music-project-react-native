import React, { useContext, useState, useEffect } from "react";
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from "react-native";
import axios from "axios";
import { ThemeContext } from "../contexts/ThemeContext";
import { getDuration, gettingSongsIds, sendData } from "../../utils";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";

const DownloadButton = ({ videoId, title, songs }) => {
    const { theme } = useContext(ThemeContext);
    const [download, setDownload] = useState(false);
    const [lastId, setLastId] = useState(null);

    const handleDownload = async () => {
        setDownload(true);
        try {
            const newId = await gettingSongsIds();
            setLastId(newId);

            const response = await axios.get(
                `http://192.168.141.1:5000/mp3?videoId=${videoId}&id=${newId}`,
                { responseType: "blob" }
            );

            const fileUri = FileSystem.documentDirectory + `${title}.mp3`;
            await FileSystem.writeAsStringAsync(fileUri, response.data, { encoding: FileSystem.EncodingType.Base64 });

            if (await Sharing.isAvailableAsync()) {
                await Sharing.shareAsync(fileUri);
            }

            await sendSongData(newId);
        } catch (error) {
            console.error("Download error:", error);
        } finally {
            setDownload(false);
        }
    };

    const sendSongData = async (newId) => {
        const song = songs.find((song) => song.id === videoId);
        if (song) {
            try {
                await sendData({
                    id: newId,
                    liked: false,
                    title: song.snippet.title,
                    src: song.snippet.thumbnails.high.url,
                    videoId,
                    duration: getDuration(song),
                });
            } catch (error) {
                console.error("Error sending song data:", error);
            }
        }
    };

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: theme }]} onPress={handleDownload} disabled={download}>
            {download ? <ActivityIndicator color="#fff" /> : <Text style={styles.text}>Dowloand</Text>}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: { padding: 10, borderRadius: 5, alignItems: "center", justifyContent: "center", marginTop: 10 },
    text: { color: "#ff0000", fontSize: 14, fontWeight: "bold" },
});

export default DownloadButton;
