import {COLORS, GradientStyles} from '../constants';

export const getGradientColors = (gradientStyle: GradientStyles) => {
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
