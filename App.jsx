import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { playSound, pauseSound, stopSound } from './src/utils/audioHandler'; // Nowe funkcje audio
import { fetchSongs } from './src/api/songService';
import { styles } from './src/styles/darkStyles';
import SongCard from './src/components/SongCard';
import { Audio } from 'expo-av';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';

const BACKGROUND_AUDIO_TASK = 'background-audio-task';

export default function App() {
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

  useEffect(() => {
    const registerBackgroundTask = async () => {
      await BackgroundFetch.registerTaskAsync(BACKGROUND_AUDIO_TASK, {
        minimumInterval: 15, // Zadanie wykonywane co 60 sekund
        stopOnTerminate: false, // Nie zatrzymuj zadania po zamknięciu aplikacji
        startOnBoot: true, // Rozpocznij po restarcie telefonu
      });
    };

    registerBackgroundTask();

    return () => {
      BackgroundFetch.unregisterTaskAsync(BACKGROUND_AUDIO_TASK);
    };
  }, []);

  const handlePlay = async (videoId) => {
    if (currentSound && currentSound.videoId === videoId) {
      return;
    }

    if (currentSound) {
      await currentSound.stopAsync();
      await currentSound.unloadAsync();
    }

    const sound = await playSound(videoId);
    setCurrentSound(sound);
    setIsPlaying(true);
  };

  const handlePause = async () => {
    if (currentSound) {
      await currentSound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const handleStop = async () => {
    if (currentSound) {
      await currentSound.stopAsync();
      setIsPlaying(false);
    }
  };

  if (!songs.length) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
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

      {/* Show pause button only when music is playing */}
      {isPlaying && (
        <TouchableOpacity
          style={styles.pauseButton}
          onPress={handleStop}
        >
          <Text style={styles.pauseButtonText}>Pause</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

TaskManager.defineTask(BACKGROUND_AUDIO_TASK, async () => {
  if (currentSound && isPlaying) {
    try {
      await currentSound.playFromPositionAsync(currentSound.positionMillis);
      return BackgroundFetch.Result.NewData;
    } catch (error) {
      console.error("Error playing audio in background:", error);
      return BackgroundFetch.Result.Failed;
    }
  }
  return BackgroundFetch.Result.NoData;
});
