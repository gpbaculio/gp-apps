import { createTheme } from '@shopify/restyle';
import { spacing, colors, container, textVariants } from './restyleVariants';

const theme = createTheme({
  colors,
  spacing,
  breakpoints: {},
  textVariants,
  container,
});

// for dark mode create another theme

export type Theme = typeof theme;

export default theme;
