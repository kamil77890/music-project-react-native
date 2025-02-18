import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MusicUI from './src/UI/MusicUI';
import SearchSong from './src/UI/SeachSong';
import { ThemeProvider } from './src/contexts/ThemeContext';
import { styles } from './src/styles/background';

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.background}>
        <SearchSong />
        <MusicUI />
      </View>
    </ThemeProvider>
  );
}

