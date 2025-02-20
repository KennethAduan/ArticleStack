import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Article} from '../models/Article';

interface ArticlePreviewProps {
  article: Article;
  onReadMore: () => void;
}

const ArticlePreview = ({article, onReadMore}: ArticlePreviewProps) => {
  if (!article) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: article.imageUrl}}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.date}>{article.publishDate}</Text>
        <Text style={styles.summary}>{article.summary}</Text>
        <TouchableOpacity
          style={styles.readMoreButton}
          onPress={onReadMore}
          activeOpacity={0.8}>
          <Text style={styles.readMoreText}>Read More</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  summary: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 24,
  },
  readMoreButton: {
    backgroundColor: '#3b5998',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  readMoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ArticlePreview;
