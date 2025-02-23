import React, { useState, useEffect, useContext } from 'react';
import { FlatList, Text, View, TouchableOpacity, Button, ScrollView } from 'react-native';
import { fetchSongs } from '../Logic/api/songService';
import { playSound, pauseSound } from '../Logic/audioHandler';
import { ServerIpContext } from "../contexts/ServerIpContext";
import Nav from './Navigator';
import SongCard from './DowloandedSongCard';
import { ThemeContext } from "../contexts/ThemeContext";
import { getStyles } from "../styles/styles";

const MusicUI = () => {
    const [songs, setSongs] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [rePlay, setReplay] = useState(false);
    const { serverIp } = useContext(ServerIpContext);
    const { theme } = useContext(ThemeContext);
    const styles = getStyles(theme);

    useEffect(() => {
        fetchSongs(serverIp)
            .then((fetchedSongs) => setSongs(fetchedSongs))
            .catch((err) => console.error("Error fetching songs:", err));
    }, [serverIp]);

    const sanitizeFilename = (name) => {
        return name.replace(/[\\/:*?"<>|]/g, "").trim();
    };

    const handlePlay = async (songName, id) => {
        try {
            await playSound(serverIp, id, sanitizeFilename(songName), rePlay);
            setIsPlaying(true);
        } catch (error) {
            console.error("Error in handlePlay:", error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Text style={styles.title}>Settings</Text>
                <TouchableOpacity style={rePlay ? styles.reTogglePlay : styles.togglePlay}>
                    <Button title="Toggle Replay" onPress={() => setReplay(!rePlay)} />
                </TouchableOpacity>
            </View>
            {songs && songs.length > 0 ? (
                <FlatList
                    style={styles.list}
                    data={songs}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <SongCard
                            item={item}
                            onPlay={() => handlePlay(item.title, item.id)}
                            rePLayPressed={rePlay}
                        />
                    )}
                />
            ) : (
                <Text style={styles.loading}>No songs found</Text>
            )}
            {isPlaying && (
                <TouchableOpacity
                    style={styles.pauseButton}
                    onPress={async () => {
                        await pauseSound();
                        setIsPlaying(false);
                    }}
                >
                    <Text style={styles.pauseButtonText}>Pause</Text>
                </TouchableOpacity>
            )}
            <Nav />
        </ScrollView>
    );
};

export default MusicUI;
