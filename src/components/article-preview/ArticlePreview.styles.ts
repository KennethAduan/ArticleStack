import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../constants';

const SCREEN_WIDTH = Dimensions.get('window').width;
const DRAWER_WIDTH = SCREEN_WIDTH * 0.85;

const useArticlePreviewStyles = () => {
  return StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 1000,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: '#000',
    },
    drawer: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: DRAWER_WIDTH,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    safeArea: {
      flex: 1,
    },
    header: {
      padding: 16,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    closeButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'rgba(0,0,0,0.1)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeButtonText: {
      fontSize: 24,
      color: '#000',
      lineHeight: 24,
    },
    scrollView: {
      flex: 1,
    },
    image: {
      width: '100%',
      height: 200,
    },
    content: {
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: '700',
      marginBottom: 8,
      color: '#000',
    },
    date: {
      fontSize: 14,
      color: '#666',
      marginBottom: 16,
    },
    summary: {
      fontSize: 16,
      lineHeight: 24,
      color: '#333',
    },
    readMoreButton: {
      backgroundColor: COLORS.RED.primary,
      marginTop: 24,
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
};

export default useArticlePreviewStyles;
