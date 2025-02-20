import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {Article} from '../models/Article';
import GradientCard from './GradientCard';

interface ArticleCardProps {
  article: Article;
  isSelected: boolean;
  onSelect: (article: Article) => void;
  index: number;
}

const ArticleCard = ({
  article,
  isSelected,
  onSelect,
  index,
}: ArticleCardProps) => {
  const handlePress = () => {
    onSelect(article);
  };

  // Cycle through gradient styles based on index
  const gradientStyles: Array<'blue' | 'orange' | 'red' | 'pink' | 'purple'> = [
    'blue',
    'orange',
    'red',
    'pink',
    'purple',
  ];
  const gradientStyle = gradientStyles[index % gradientStyles.length];

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      style={styles.container}>
      <GradientCard
        gradientStyle={gradientStyle}
        isSelected={isSelected}
        style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.title}>{article.title}</Text>
          {isSelected && <Text style={styles.arrow}>→</Text>}
        </View>
      </GradientCard>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    elevation: 3,
  },
  card: {
    padding: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
  title: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  arrow: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 8,
  },
});

export default ArticleCard;
