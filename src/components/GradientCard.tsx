/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {GradientStyles} from '../constants';
import {getGradientColors} from '../utils';
interface GradientCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  gradientStyle: GradientStyles;
}

const GradientCard = ({children, style, gradientStyle}: GradientCardProps) => {
  const colors = getGradientColors(gradientStyle);
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
