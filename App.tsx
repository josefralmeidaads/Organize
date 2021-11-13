import React from 'react';
import { StatusBar } from 'react-native';
import {  ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';

import Router from './src/router/routes';
import store from './src/store';
import theme from './src/styles/theme';

const App: React.FC = () => {
  return (
  <Provider store={store}>
    <ThemeProvider theme={theme}>  
      <StatusBar backgroundColor={theme.colors.blue_500}/>
      <Router />
    </ThemeProvider>
  </Provider>
  );
}

export default App;