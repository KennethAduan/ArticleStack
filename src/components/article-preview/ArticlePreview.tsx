import React, {memo} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Article} from '../../models/Article';
import useArticlePreviewStyles from './ArticlePreview.styles';

interface ArticlePreviewProps {
  article: Article;
  onReadMore: () => void;
}

const ArticlePreview = memo(({article, onReadMore}: ArticlePreviewProps) => {
  const styles = useArticlePreviewStyles();

  if (!article?.title || !article?.imageUrl) {
    return null;
  }

  return (
    <ScrollView
      style={styles.scrollView}
      testID="article-preview-scroll"
      showsVerticalScrollIndicator={false}
      bounces={false}>
      <View style={styles.content}>
        <Image
          source={{uri: article.imageUrl}}
          style={styles.image}
          resizeMode="cover"
          accessible={true}
          accessibilityRole="image"
          accessibilityLabel={`Image for article: ${article.title}`}
          testID="article-preview-image"
        />
        <Text
          style={styles.title}
          accessibilityRole="header"
          testID="article-preview-title">
          {article.title}
        </Text>
        <Text
          style={styles.summary}
          numberOfLines={5}
          ellipsizeMode="tail"
          testID="article-preview-summary">
          {article.summary || 'No summary available'}
        </Text>
        <TouchableOpacity
          onPress={onReadMore}
          style={styles.readMoreButton}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel={`Read more about ${article.title}`}
          accessibilityHint="Opens the full article in a new screen"
          testID="article-preview-read-more">
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
});

ArticlePreview.displayName = 'ArticlePreview';

export default ArticlePreview;
