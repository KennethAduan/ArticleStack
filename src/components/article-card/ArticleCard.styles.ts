import {StyleSheet} from 'react-native';

const useArticleCardStyles = () => {
  return StyleSheet.create({
    container: {
      borderRadius: 14,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    card: {
      padding: 10,
      borderRadius: 16,
      height: '40%',
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'left',
      fontWeight: 'bold',
      marginTop: 10,
    },
    arrow: {
      position: 'absolute',
      top: 20,
      right: 0,
      bottom: 0,
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
    },
  });
};

export default useArticleCardStyles;
