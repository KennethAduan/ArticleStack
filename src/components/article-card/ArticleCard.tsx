import React, {memo} from 'react';
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

const ArticleCard = memo(
  ({article, isSelected, onSelect, index}: ArticleCardProps) => {
    const styles = useArticleCardStyles();

    const handlePress = () => {
      if (!article?.id) {
        return;
      }
      onSelect(article);
    };

    const gradientStyle = gradientStyles[index % gradientStyles.length];

    return (
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.8}
        style={styles.container}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={`Select article: ${article.title}`}
        accessibilityState={{selected: isSelected}}
        testID={`article-card-${index}`}>
        <GradientCard
          gradientStyle={gradientStyle}
          style={styles.card}
          dataTestId={`gradient-card-${index}`}>
          <View style={styles.content}>
            <Text
              style={styles.title}
              numberOfLines={2}
              ellipsizeMode="tail"
              accessibilityRole="header">
              {article.title}
            </Text>
            {isSelected && (
              <Text
                style={styles.arrow}
                accessibilityLabel="Selected article indicator">
                →
              </Text>
            )}
          </View>
        </GradientCard>
      </TouchableOpacity>
    );
  },
);

ArticleCard.displayName = 'ArticleCard';

export default ArticleCard;
