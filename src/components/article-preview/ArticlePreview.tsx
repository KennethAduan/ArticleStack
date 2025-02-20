import React, {useEffect, useRef} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  Dimensions,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Article} from '../../models/Article';
import useArticlePreviewStyles from './ArticlePreview.styles';

interface ArticlePreviewProps {
  article: Article;
  isVisible: boolean;
  onReadMore: () => void;
  onClose: () => void;
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const DRAWER_WIDTH = SCREEN_WIDTH * 0.85;

const ArticlePreview = ({
  article,
  isVisible,
  onReadMore,
  onClose,
}: ArticlePreviewProps) => {
  const styles = useArticlePreviewStyles();
  const translateX = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0.5,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: -DRAWER_WIDTH,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isVisible, overlayOpacity, translateX]);

  if (!article) {
    return null;
  }

  return (
    <>
      {isVisible && (
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={onClose}>
            <Animated.View
              style={[
                styles.overlay,
                {
                  opacity: overlayOpacity,
                },
              ]}
            />
          </TouchableWithoutFeedback>

          <Animated.View
            style={[
              styles.drawer,
              {
                transform: [{translateX}],
              },
            ]}>
            <SafeAreaView style={styles.safeArea}>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={onClose}
                  style={styles.closeButton}
                  activeOpacity={0.8}>
                  <Text style={styles.closeButtonText}>×</Text>
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.scrollView}>
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
                    onPress={onReadMore}
                    style={styles.readMoreButton}>
                    <Text style={styles.readMoreText}>Read More</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </SafeAreaView>
          </Animated.View>
        </View>
      )}
    </>
  );
};

export default ArticlePreview;
