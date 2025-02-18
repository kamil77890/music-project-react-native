import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { styles } from '../styles/darkStyles';

const SongCard = ({ item, onPlay }) => (
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
        <Button title="Play" color="#33BBCF" onPress={onPlay} />
    </View>
);

export default SongCard;
