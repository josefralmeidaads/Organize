import React from 'react';
import { StatusBar } from 'react-native';
import {  ThemeProvider } from 'react-native-elements';

import Router from './src/router/routes';
import theme from './src/styles/theme';

const App: React.FC = () => {
  return (
  <ThemeProvider theme={theme}>  
    <StatusBar backgroundColor={theme.colors.blue_500}/>
    <Router />
  </ThemeProvider>
  );
}

export default App;