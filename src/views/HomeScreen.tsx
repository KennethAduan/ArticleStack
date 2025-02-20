import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {articles} from '../models/Article';
import {useArticle} from '../context/ArticleContext';
import StackedCards from '../components/StackedCards';
import ArticlePreview from '../components/article-preview/ArticlePreview';

const HomeScreen = () => {
  const {
    selectedArticle,
    handleSelectArticle,
    handleReadMore,
    isArticlePreviewVisible,
    handleCloseArticlePreview,
  } = useArticle();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <StackedCards
          articles={articles}
          selectedArticle={selectedArticle || null}
          onSelectArticle={handleSelectArticle}
        />
      </View>
      {selectedArticle && (
        <ArticlePreview
          article={selectedArticle}
          onReadMore={handleReadMore}
          isVisible={isArticlePreviewVisible}
          onClose={handleCloseArticlePreview}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
});

export default HomeScreen;
