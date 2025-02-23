import { MaterialIcons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { View, Button, TouchableOpacity } from "react-native";
import { ThemeContext } from '../contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import { getStyles } from "../styles/styles"

const Nav = () => {
    const navigation = useNavigation();
    const { theme } = useContext(ThemeContext);
    const styles = getStyles(theme);

    return <View style={styles.footer}>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <TouchableOpacity onPress={() => navigation.navigate("Music")}>
            <MaterialIcons name="library-music" size={30} color="#900" />
        </TouchableOpacity>
        <Button title="Button 2" onPress={() => navigation.navigate("Music")} />
    </View>
}

export default Nav