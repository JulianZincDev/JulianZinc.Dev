import { ButtonVariant } from "@/components/Button/Button.types";

export const defaultTheme = {
  banner: {
    background: '#7ca8e2',
  },
  menubar: {
    background: '#fcfcfc',
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
      }
    }
  }
};

export type DefaultThemeType = typeof defaultTheme;
// However the default Theme is structured will be the type of the theme
// export type Theme = typeof defaultTheme;