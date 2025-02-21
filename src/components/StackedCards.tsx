/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
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
  const renderItem = ({item, index}: {item: Article; index: number}) => (
    <View
      style={[
        styles.cardWrapper,
        {
          marginTop: index > 0 ? -460 : 0,
          zIndex: index,
        },
      ]}>
      <ArticleCard
        article={item}
        isSelected={selectedArticle?.id === item.id}
        onSelect={onSelectArticle}
        index={index}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  flatListContent: {
    marginTop: 120,
  },

  cardWrapper: {
    width: '100%',
    height: 530,
  },
});

export default StackedCards;
