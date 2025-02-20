/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS, GradientStyles} from '../constants';
interface GradientCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  gradientStyle: GradientStyles;
}

const GradientCard = ({children, style, gradientStyle}: GradientCardProps) => {
  const getGradientColors = () => {
    switch (gradientStyle) {
      case 'blue':
        return {
          primary: COLORS.BLUE.primary,
          secondary: COLORS.BLUE.secondary,
        };
      case 'orange':
        return {
          primary: COLORS.ORANGE.primary,
          secondary: COLORS.ORANGE.secondary,
        };
      case 'red':
        return {
          primary: COLORS.RED.primary,
          secondary: COLORS.RED.secondary,
        };
      case 'pink':
        return {
          primary: COLORS.PINK.primary,
          secondary: COLORS.PINK.secondary,
        };
      case 'purple':
        return {
          primary: COLORS.PURPLE.primary,
          secondary: COLORS.PURPLE.secondary,
        };
      default:
        return {
          primary: COLORS.DEFAULT.primary,
          secondary: COLORS.DEFAULT.secondary,
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
});

export default GradientCard;
