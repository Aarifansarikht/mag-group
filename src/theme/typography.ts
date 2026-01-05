
import { Platform } from 'react-native';

// NOTE: Ensure these fonts are linked in your react-native.config.js and assets folder
const families = {
  display: Platform.select({ ios: 'ChakraPetch-BoldItalic', android: 'ChakraPetch-BoldItalic' }), // Fallback to sans-serif if not linked yet
  displayRegular: Platform.select({ ios: 'ChakraPetch-Regular', android: 'ChakraPetch-Regular' }),
  body: Platform.select({ ios: 'Inter-Regular', android: 'Inter-Regular' }),
  bodyBold: Platform.select({ ios: 'Inter-Bold', android: 'Inter-Bold' }),
};

export const typography = {
  fonts: families,
  sizes: {
    h1: 42,
    h2: 32,
    h3: 24,
    h4: 20,
    body: 16,
    sm: 14,
    xs: 12,
  },
  lineHeights: {
    h1: 48,
    h2: 38,
    body: 24,
  },
};
