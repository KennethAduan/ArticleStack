import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Modal,
  ActivityIndicator,
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

  if (!url) {
    return null;
  }

  return (
    <Modal
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
      animationType="slide">
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={onClose}
              style={styles.closeButton}
              accessibilityRole="button"
              accessibilityLabel="Close article">
              <Text style={styles.closeText}>Back</Text>
            </TouchableOpacity>
            <Text
              style={styles.title}
              numberOfLines={1}
              accessibilityRole="header">
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
      </View>
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
