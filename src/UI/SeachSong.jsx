import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getSongByString } from '../Logic/api/YT/utils';
import { ThemeContext } from '../contexts/ThemeContext';
import { styles } from '../styles/searchSong';
import YTsong from "./YTsong"
import Nav from './Navigator';


const SearchSong = () => {
    const [query, setQuery] = useState('');
    const [songs, setSongs] = useState([]);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        if (query.trim()) {
            getSongByString(query).then((data) => {
                setSongs(data);
            });
        }
    }, [query]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Songs for BEATER!!!</Text>
            <View style={styles.searchBox}>
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    value={query}
                    onChangeText={(text) => setQuery(text)}
                />
            </View>

            <YTsong songs={songs} />
            <Nav />
        </View>
    );
};

export default SearchSong