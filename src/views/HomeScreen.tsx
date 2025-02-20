import React from 'react';
import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {Article, articles} from '../models/Article';
import {useArticle} from '../context/ArticleContext';
import ArticleCard from '../components/ArticleCard';
import ArticlePreview from '../components/ArticlePreview';

const HomeScreen = () => {
  const {selectedArticle, handleSelectArticle, handleReadMore} = useArticle();

  const renderArticleCard = ({item, index}: {item: Article; index: number}) => (
    <ArticleCard
      article={item}
      isSelected={selectedArticle?.id === item.id}
      onSelect={handleSelectArticle}
      index={index}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.listContainer}>
          <FlatList
            data={articles}
            renderItem={renderArticleCard}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
        {/* <View style={styles.previewContainer}>
          {selectedArticle && (
            <ArticlePreview
              article={selectedArticle}
              onReadMore={handleReadMore}
            />
          )}
        </View> */}
      </View>
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
    flexDirection: 'row',
  },
  listContainer: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
  },
  previewContainer: {
    flex: 2,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
