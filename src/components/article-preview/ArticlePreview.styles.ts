import {StyleSheet} from 'react-native';
import {COLORS} from '../../constants';

const useArticlePreviewStyles = () => {
  return StyleSheet.create({
    scrollView: {
      backgroundColor: 'white',
      width: '100%',
      height: 10,
      borderRadius: 10,
      marginTop: 120,
    },
    image: {
      width: '100%',
      height: 100,
    },
    content: {
      padding: 20,
    },
    title: {
      fontSize: 14,
      fontWeight: '700',
      marginBottom: 8,
      color: '#000',
    },
    summary: {
      fontSize: 12,
      lineHeight: 18,
      color: '#333',
    },
    readMoreButton: {
      backgroundColor: COLORS.RED.primary,
      marginTop: 12,
      padding: 12,
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      bottom: -60,
      position: 'absolute',
      left: 12,
      right: 12,
    },
    readMoreText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: '600',
    },
  });
};

export default useArticlePreviewStyles;
