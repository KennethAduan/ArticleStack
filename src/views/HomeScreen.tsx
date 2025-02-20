import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import {articles} from '../models/Article';
import {useArticle} from '../context/ArticleContext';
import StackedCards from '../components/StackedCards';
import ArticlePreview from '../components/article-preview/ArticlePreview';
import {COLORS} from '../constants';

const HomeScreen = () => {
  const {selectedArticle, handleSelectArticle, handleReadMore} = useArticle();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.stackedCardsContainer}>
          <StackedCards
            articles={articles}
            selectedArticle={selectedArticle || articles[0]}
            onSelectArticle={handleSelectArticle}
          />
        </View>
        <View style={styles.previewContainer}>
          <ArticlePreview
            article={selectedArticle || articles[0]}
            onReadMore={handleReadMore}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY.dark,
  },
  content: {
    flex: 1,
    padding: 4,
    flexDirection: 'row',
  },
  stackedCardsContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  previewContainer: {
    flex: 1,
    width: '100%',
    height: 490,
  },
});

export default HomeScreen;
