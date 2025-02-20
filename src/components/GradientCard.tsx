import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';

interface GradientCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  gradientStyle: 'blue' | 'orange' | 'red' | 'pink' | 'purple';
  isSelected?: boolean;
}

const GradientCard = ({
  children,
  style,
  gradientStyle,
  isSelected,
}: GradientCardProps) => {
  const getGradientColors = () => {
    switch (gradientStyle) {
      case 'blue':
        return {
          primary: '#2196F3',
          secondary: '#42A5F5',
        };
      case 'orange':
        return {
          primary: '#FF9800',
          secondary: '#FFA726',
        };
      case 'red':
        return {
          primary: '#D32F2F',
          secondary: '#F44336',
        };
      case 'pink':
        return {
          primary: '#E91E63',
          secondary: '#EC407A',
        };
      case 'purple':
        return {
          primary: '#9C27B0',
          secondary: '#AB47BC',
        };
      default:
        return {
          primary: '#2196F3',
          secondary: '#42A5F5',
        };
    }
  };

  const colors = getGradientColors();

  return (
    <View
      style={[
        styles.container,
        style,
        {
          backgroundColor: colors.primary,
        },
        isSelected && styles.selected,
      ]}>
      <View
        style={[
          styles.gradientOverlay,
          {backgroundColor: colors.secondary, opacity: 0.7},
        ]}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    minHeight: 80,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    transform: [{skewY: '-6deg'}, {scaleX: 1.5}],
  },
  selected: {
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default GradientCard;
