import { StyleSheet } from '@react-pdf/renderer';
import '~/PDF/fonts';

export const colors = {
  yellow: {
    light: '#FEFFF7', // #FEFFF7,
    dark: '#F1C231', // #F1C231
  },
  blue: {
    light: '#1F79C7', // #1F79C7
    dark: '#073763', // #073763,
    link: '#0000FF', // #0000FF
  },
  gray: '#666666', // #666666,
  black: '#000', // #000000
};

export const layout = StyleSheet.create({
  page: {
    backgroundColor: colors.yellow.light,
    fontWeight: 400,
    padding: '32px 40px',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    main: {
      flex: '70%',
      marginRight: 32,
    },
    sidebar: {
      flex: '30%',
    },
  },

  links: {
    marginTop: 4,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
});

export const typography = StyleSheet.create({
  h1: {
    fontFamily: 'Bitter',
    color: colors.blue.dark,
    fontSize: 32,
    fontWeight: 600,
    lineHeight: 1,
    marginBottom: 6,
    letterSpacing: 0.375,
  },
  h2: {
    fontFamily: 'FiraSans',
    color: colors.yellow.dark,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: 0.375,
  },
  h3: {
    fontFamily: 'FiraSans',
    color: colors.blue.light,
    fontSize: 10,
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: 0.375,
    marginBottom: 14,
  },
  link: {
    fontFamily: 'FiraSans',
    fontSize: 8,
    fontWeight: 400,
    lineHeight: 1.25,
    letterSpacing: 0.375,
  },
  body_1: {
    fontFamily: 'Bitter',
    color: colors.black,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1,
  },
  body_2: {
    fontFamily: 'Bitter',
    color: colors.black,
    fontSize: 10,
    fontWeight: 500,
    lineHeight: 1,
  },
  body_3: {
    fontFamily: 'FiraSans',
    color: colors.black,
    fontSize: 8,
    fontWeight: 350,
    lineHeight: 1,
  },
});
