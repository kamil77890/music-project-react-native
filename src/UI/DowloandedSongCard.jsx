import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/darkStyles';

const SongCard = ({ item, onPlay, rePLayPressed }) => (
    <View style={styles.card}>
        <Image source={{ uri: item.src }} style={styles.thumbnail} />
        <View style={styles.details}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.duration}>
                {item.duration.minutes} min {item.duration.seconds} sec
            </Text>
            <Text style={styles.liked}>
                {item.liked ? '❤️ Liked' : '🤍 Not Liked'}
            </Text>

        </View>
        <TouchableOpacity style={rePLayPressed ? styles.rePlayButton : styles.playButton} onPress={onPlay}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Play</Text>
        </TouchableOpacity>
    </View>
);

export default SongCard;
