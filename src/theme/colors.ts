
export const palette = {
  stone: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
    950: '#09090b',
  },
  brand: {
    DEFAULT: '#bef264', // lime-400
    50: '#f7fee7',
    100: '#ecfccb',
    200: '#d9f99d',
    300: '#bef264',
    400: '#a3e635',
    500: '#84cc16',
    600: '#65a30d',
    700: '#4d7c0f',
    800: '#3f6212',
    900: '#365314',
    950: '#1a2e05',
  },
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
};

export const lightTheme = {
  background: palette.stone[50],
  surface: palette.white,
  text: palette.stone[900],
  textSecondary: palette.stone[500],
  border: palette.stone[200],
  primary: palette.brand.DEFAULT,
  primaryForeground: palette.stone[950],
  card: palette.white,
};

export const darkTheme = {
  background: palette.stone[950],
  surface: palette.stone[900],
  text: palette.stone[50],
  textSecondary: palette.stone[400],
  border: palette.stone[800],
  primary: palette.brand.DEFAULT,
  primaryForeground: palette.stone[950],
  card: palette.stone[900],
};
