import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Article} from '../../models/Article';
import GradientCard from '../GradientCard';
import useArticleCardStyles from './ArticleCard.styles';
import {gradientStyles} from '../../constants';

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

  const gradientStyle = gradientStyles[index % gradientStyles.length];

  const styles = useArticleCardStyles();

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      style={styles.container}>
      <GradientCard
        gradientStyle={gradientStyle}
        style={styles.card}
        dataTestId={`gradient-card-${index}`}>
        <View style={styles.content}>
          <Text style={styles.title}>{article.title}</Text>
          {isSelected && <Text style={styles.arrow}>→</Text>}
        </View>
      </GradientCard>
    </TouchableOpacity>
  );
};

export default ArticleCard;
