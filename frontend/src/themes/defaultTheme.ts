import { ButtonVariant } from "@/components/Button/Button.types";

export const defaultTheme = {
  cursorBlob: {
    fill: '#FF0066',
    stroke: '#72022f',
  },
  black: 'black',
  white: 'white',
  banner: {
    background: '#7ca8e2',
  },
  menubar: {
    background: '#fcfcfc',
  },
  projectCard: {
    background: '#fcfcfc',
    border: 'black',
  },
  techStack: {
    techElement: {
      background: '#f0f0f0',
    },
  },
  button: {
    variants: {
      [ButtonVariant.Neutral]: {
        textLight: 'white',
        textDark: 'black',
        backgroundLight: '#BCCFF8',
        backgroundDark: '#6688D2',
        borderLight: '#4E7BA4',
        borderDark: '#4E7BA4',
      },
      [ButtonVariant.Disabled]: {
        textLight: '#585858',
        textDark: '#585858',
        backgroundLight: '#EBEBE4',
        backgroundDark: '#EBEBE4',
        borderLight: '#585858',
        borderDark: '#585858',
      },
      [ButtonVariant.MenuButton]: {
        textLight: 'black',
        textDark: 'black',
        backgroundLight: 'transparent',
        backgroundDark: 'darkgrey',
        borderLight: 'gray',
        borderDark: 'transparent',
      },
      [ButtonVariant.LinkButton]: {
        textLight: 'white',
        textDark: 'white',
        backgroundLight: '#7ca8e2',
        backgroundDark: '#1e73e2',
        borderLight: 'black',
        borderDark: 'black',
      },
      [ButtonVariant.TechElement]: {
        textLight: 'black',
        textDark: 'black',
        backgroundLight: '#f0f0f0',
        backgroundDark: '#cccccc',
        borderLight: 'black',
        borderDark: 'black',
      },
    }
  }
};

export type DefaultThemeType = typeof defaultTheme;
// However the default Theme is structured will be the type of the theme
// export type Theme = typeof defaultTheme;