/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Article} from '../models/Article';
import ArticleCard from './article-card/ArticleCard';

interface StackedCardsProps {
  articles: Article[];
  selectedArticle?: Article | null;
  onSelectArticle: (article: Article) => void;
}

const StackedCards = ({
  articles,
  selectedArticle,
  onSelectArticle,
}: StackedCardsProps) => {
  return (
    <View style={styles.container}>
      {articles.map((article, index) => (
        <View
          key={article.id}
          style={[
            styles.cardWrapper,
            {
              marginTop: index > 0 ? -460 : 0,
              zIndex: index,
            },
          ]}>
          <ArticleCard
            article={article}
            isSelected={selectedArticle?.id === article.id}
            onSelect={onSelectArticle}
            index={index}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  cardWrapper: {
    width: '100%',
    height: 600,
  },
});

export default StackedCards;
