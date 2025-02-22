import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getSongByString } from '../Logic/api/YT/utils';
import { ThemeContext } from '../contexts/ThemeContext';
import { styles } from '../styles/searchSong';
import { getServerIpFromStorage } from "../localStorage/utils"
import YTsong from "./YTsong"
import Nav from './Navigator';


const SearchSong = () => {
    const [query, setQuery] = useState('');
    const [songs, setSongs] = useState([]);
    const { theme } = useContext(ThemeContext);


    const handleKeyPress = async () => {
        const pls_work = await getSongByString(query)
        setSongs(pls_work)
    }



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Songs for BEATER!!!</Text>
            <View style={styles.searchBox}>
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    value={query}
                    onChangeText={(text) => setQuery(text)}
                    onKeyPress={handleKeyPress}
                />
            </View>

            <YTsong songs={songs} />
            <Nav />
        </View>
    );
};

export default SearchSong