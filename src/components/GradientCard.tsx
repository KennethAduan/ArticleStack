import React, {memo} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {GradientStyles} from '../constants';
import {getGradientColors} from '../utils';

interface GradientCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  gradientStyle: GradientStyles;
  dataTestId?: string;
}

const GradientCard = memo(
  ({children, style, gradientStyle, dataTestId}: GradientCardProps) => {
    if (!gradientStyle) {
      console.warn('GradientCard: gradientStyle is required');
      return null;
    }

    const colors = getGradientColors(gradientStyle);

    return (
      <View
        style={[styles.container, style, {backgroundColor: colors.primary}]}
        testID={dataTestId}
        accessible={true}
        accessibilityRole="none">
        <View
          style={[styles.gradientOverlay, {backgroundColor: colors.secondary}]}
          accessibilityElementsHidden={true}
          importantForAccessibility="no"
        />
        {children}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    minHeight: 80,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.5,
    transform: [{translateY: -50}, {scaleY: 2}],
  },
});

GradientCard.displayName = 'GradientCard';

export default GradientCard;
