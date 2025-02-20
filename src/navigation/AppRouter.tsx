import React from 'react';
import {View, StyleSheet} from 'react-native';
import HomeScreen from '../views/HomeScreen';
import ArticleDetail from '../views/ArticleDetail';
import {useArticle} from '../context/ArticleContext';

const AppRouter = () => {
  const {selectedArticle, isWebViewVisible, handleCloseWebView} = useArticle();

  return (
    <View style={styles.container}>
      <HomeScreen />
      <ArticleDetail
        url={selectedArticle?.webUrl || null}
        visible={isWebViewVisible}
        onClose={handleCloseWebView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppRouter;
