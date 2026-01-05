
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from './colors';
import { typography } from './typography';

export const useTheme = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  const colors = isDark ? darkTheme : lightTheme;

  return {
    colors,
    typography,
    isDark,
  };
};
