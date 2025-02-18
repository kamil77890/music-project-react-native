import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FaSearch } from 'react-icons/fa';
import { getSongByString } from '../Logic/api/YT/utils';
import { ThemeContext } from '../contexts/ThemeContext';
import { styles } from '../styles/searchSong';

const SearchSong = () => {
    const [query, setQuery] = useState('');
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        if (query) {
            getSongByString(query).then((response) => {
                console.log(response);
            });
        }
    }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {

        }
    };

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
                <TouchableOpacity onPress={() => handleSubmit()}>
                    <Text style={styles.searchIcon}>🔍</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SearchSong;
