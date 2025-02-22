import React from 'react';
import { ServerIpProvider } from './src/contexts/ServerIpContext';
import AppContent from './src/Navigation/AppContent';

const App = () => (
  <ServerIpProvider>
    <AppContent />
  </ServerIpProvider>
);

export default App;
