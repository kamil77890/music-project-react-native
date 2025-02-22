
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchSong from '../UI/SeachSong';
import MusicUI from '../UI/MusicUI';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from '../contexts/ThemeContext';

const Stack = createStackNavigator();

const MainNavigator = () => (
    <NavigationContainer>
        <ThemeProvider>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
                <Stack.Screen name="Home" component={SearchSong} />
                <Stack.Screen name="Music" component={MusicUI} />
            </Stack.Navigator>
        </ThemeProvider>
    </NavigationContainer>
);

export default MainNavigator;
