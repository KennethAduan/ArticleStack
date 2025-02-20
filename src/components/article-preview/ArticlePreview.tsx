import React from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {Article} from '../../models/Article';
import useArticlePreviewStyles from './ArticlePreview.styles';

interface ArticlePreviewProps {
  article: Article;

  onReadMore: () => void;
}

const ArticlePreview = ({article, onReadMore}: ArticlePreviewProps) => {
  const styles = useArticlePreviewStyles();

  if (!article) {
    return null;
  }

  return (
    <ScrollView style={styles.scrollView}>
      <Image
        source={{uri: article.imageUrl}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.summary} numberOfLines={5}>
          {article.summary}
        </Text>
        <TouchableOpacity onPress={onReadMore} style={styles.readMoreButton}>
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ArticlePreview;
