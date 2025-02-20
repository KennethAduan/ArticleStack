import {StyleSheet} from 'react-native';

type ArticleCardStylesProps = {
  isSelected: boolean;
};

const useArticleCardStyles = ({isSelected}: ArticleCardStylesProps) => {
  return StyleSheet.create({
    container: {
      borderRadius: 16,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      height: '30%',
    },
    card: {
      padding: 24,
      borderRadius: 16,
      height: '100%',
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 27,
      alignItems: 'center',
      fontWeight: '700',
      lineHeight: 32,
      marginTop: isSelected ? 10 : 25,
    },
    arrow: {
      position: 'absolute',
      top: 40,
      right: 0,
      bottom: 0,
      color: '#fff',
      fontSize: 24,
    },
  });
};

export default useArticleCardStyles;
