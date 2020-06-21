import React from 'react';
import Routes from './src/routes';

import {StatusBar} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';

const App = () => (
  <>
    <StatusBar barStyle="light-content" />
    <PaperProvider>
      <Routes />
    </PaperProvider>
  </>
);

export default App;
