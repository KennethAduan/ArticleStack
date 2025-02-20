import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Modal,
  ActivityIndicator,
  Animated,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {COLORS} from '../constants';

interface ArticleDetailProps {
  url: string | null;
  visible: boolean;
  onClose: () => void;
}

const ArticleDetail = ({url, visible, onClose}: ArticleDetailProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }

    // Cleanup function
    return () => {
      slideAnim.stopAnimation();
      slideAnim.removeAllListeners();
    };
  }, [visible, slideAnim]);

  if (!url) {
    return null;
  }

  return (
    <Modal transparent={false} visible={visible} onRequestClose={onClose}>
      <Animated.View
        style={[
          styles.container,
          {
            opacity: slideAnim,
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
          },
        ]}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeText}>← Back</Text>
            </TouchableOpacity>
            <Text style={styles.title} numberOfLines={1}>
              {url}
            </Text>
          </View>
          <View style={styles.browserContainer}>
            <WebView
              source={{uri: url}}
              style={styles.webview}
              onLoadStart={() => setIsLoading(true)}
              onLoadEnd={() => setIsLoading(false)}
              startInLoadingState={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              scalesPageToFit={true}
            />
            {isLoading && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color={COLORS.BLUE.primary} />
              </View>
            )}
          </View>
        </SafeAreaView>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  closeButton: {
    marginRight: 16,
  },
  closeText: {
    fontSize: 16,
    color: '#3b5998',
    fontWeight: '600',
  },
  title: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  browserContainer: {
    flex: 1,
    position: 'relative',
  },
  webview: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ArticleDetail;
