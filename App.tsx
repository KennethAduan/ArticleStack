import React from 'react';
import {StatusBar} from 'react-native';
import AppRouter from './src/navigation/AppRouter';
import {ArticleProvider} from './src/context/ArticleContext';

const App = () => {
  return (
    <ArticleProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <AppRouter />
    </ArticleProvider>
  );
};

export default App;
