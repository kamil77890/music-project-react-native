import React from 'react';
import { ServerIpProvider } from './src/contexts/ServerIpContext';
import { ThemeProvider } from './src/contexts/ThemeContext';
import AppContent from './src/Navigation/AppContent';
import { NavigationContainer } from "@react-navigation/native";

const App = () => (
  <ThemeProvider>
    <NavigationContainer>
      <ServerIpProvider>
        <AppContent />
      </ServerIpProvider>
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
