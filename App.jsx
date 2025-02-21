import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchSong from './src/UI/SeachSong';
import MusicUI from './src/UI/MusicUI';
import { ThemeProvider } from './src/contexts/ThemeContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name="Home" component={SearchSong} />
          <Stack.Screen name="Music" component={MusicUI} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
