import { fetchSongs } from '../Logic/api/songService';
import { playSound, pauseSound, playWithoutAnyHasitatting } from '../Logic/audioHandler';
import { FlatList, Text, View, TouchableOpacity, Button } from 'react-native';

// import { CheckBox } from 'expo-checkbox';
import React, { useState, useEffect } from 'react';
import SongCard from './SongCard';
import { styles } from '../styles/darkStyles';


const MusicUI = () => {
    const [songs, setSongs] = useState([]);
    const [currentSound, setCurrentSound] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [rePlay, setReplay] = useState(false)

    useEffect(() => {
        fetchSongs().then(setSongs);

        return () => {
            if (currentSound) {
                currentSound.unloadAsync();
            }
        };
    }, [currentSound]);

    const handlePlay = (songId) => {
        const sound = playSound(songId, rePlay);
        setCurrentSound(sound);
        setIsPlaying(true)
    }



    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Settings</Text>

                <TouchableOpacity style={rePlay ? styles.reButton :styles.button} >
                    <Button title="Naciśnij by oddtwarzać w kółko" style={styles.kułko} onPress={() => { setReplay(!rePlay) }} />
                </TouchableOpacity>

            </View>
            {songs ?
                <FlatList
                    style={styles.list}
                    data={songs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <SongCard item={item} onPlay={() => handlePlay(item.id)} rePLayPressed={rePlay} />
                    )}
                /> : ""}

            {
                isPlaying && (
                    <TouchableOpacity
                        style={styles.pauseButton}
                        onPress={pauseSound}
                    >
                        <Text style={styles.pauseButtonText}>Pause</Text>
                    </TouchableOpacity>
                )
            }
        </View >
    );
}
export default MusicUI