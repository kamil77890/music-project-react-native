import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, ScrollView } from 'react-native';
import { getSongByString } from '../Logic/api/YT/utils';
import { ThemeContext } from '../contexts/ThemeContext';
import { getStyles } from '../styles/styles';

import YTsong from "./YTsong"
import Nav from './Navigator';


const SearchSong = () => {
    const [query, setQuery] = useState('');
    const [songs, setSongs] = useState([]);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const styles = getStyles(theme);


    const handleSearch = async () => {
        const pls_work = await getSongByString(query)
        setSongs(pls_work)
    }



    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button title={theme} onPress={toggleTheme} />
            <Text style={styles.title}>Songs for BEATER!!!</Text>
            <View style={styles.searchBox}>
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    value={query}
                    onChangeText={(text) => setQuery(text)}
                />
                <Button
                    style={styles.buttonS}
                    title="NOW!"
                    onPress={handleSearch}
                />
            </View>

            <YTsong songs={songs} />
            <Nav />
        </ScrollView>

    );
};

export default SearchSong