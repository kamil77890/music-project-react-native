import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import DownloadButton from "./DownloadButton";
import { getDuration } from "../../utils";

const Songs = ({ songs }) => {
    const filteredSongs = songs
        .map((song) => ({ ...song, duration: getDuration(song) }))
        .filter((song) => song.duration.minutes > 1 && song.duration.minutes < 12)
        .filter((song) => !song.snippet.title.includes("#"));

    return (
        <ScrollView style={styles.container}>
            {filteredSongs.map((song) => (
                <View style={styles.song} key={song.id}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: song.snippet.thumbnails.high.url }}
                            style={styles.image}
                        />
                        <Text style={styles.time}>
                            {song.duration.minutes}:
                            {song.duration.seconds.length === 1
                                ? "0" + song.duration.seconds
                                : song.duration.seconds}
                        </Text>
                    </View>

                    <Text style={styles.text}>
                        {song.snippet.title.replace("&amp;", "&")}
                    </Text>

                    <DownloadButton
                        songs={songs}
                        videoId={song.id}
                        title={song.snippet.title}
                    />
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { padding: 10 },
    song: { marginBottom: 20, padding: 10, backgroundColor: "#f0f0f0", borderRadius: 10 },
    imageContainer: { position: "relative", alignItems: "center" },
    image: { width: 100, height: 100, borderRadius: 10 },
    time: { position: "absolute", bottom: 5, right: 5, backgroundColor: "#000", color: "#fff", padding: 5, fontSize: 12 },
    text: { marginTop: 5, fontSize: 16, fontWeight: "bold" },
});

export default Songs;
