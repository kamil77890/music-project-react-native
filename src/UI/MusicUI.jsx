import { fetchSongs } from '../Logic/api/songService';
import { playSound, pauseSound } from '../Logic/audioHandler';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import SongCard from './SongCard';
import { styles } from '../styles/darkStyles';


const MusicUI = () => {
    const [songs, setSongs] = useState([]);
    const [currentSound, setCurrentSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        fetchSongs().then(setSongs);


        return () => {
            if (currentSound) {
                currentSound.unloadAsync();
            }
        };
    }, [currentSound]);

    const handlePlay = (songId) => {
        const sound = playSound(songId);
        setCurrentSound(sound);
        setIsPlaying(true)
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={songs}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <SongCard item={item} onPlay={() => handlePlay(item.id)} />
                )}
            />

            {isPlaying && (
                <TouchableOpacity
                    style={styles.pauseButton}
                    onPress={pauseSound}
                >
                    <Text style={styles.pauseButtonText}>Pause</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}
export default MusicUI