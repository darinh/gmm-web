import { FontWeights, IButtonStyles, IStyle, useTheme } from '@fluentui/react';
import { IAppHeaderStyleProps, IAppHeaderStyles } from './AppHeader.types';

export const getButtonStyles: () => IButtonStyles = () => {
  const theme = useTheme();
  const { white, themePrimary, themeDark, themeDarkAlt } = theme.palette;
  return {
    root: {
      backgroundColor: themePrimary,
      ...theme.fonts.medium,
      color: white
    },
    rootHovered: {
      textDecoration: 'none',
      color: white,
      backgroundColor: themeDarkAlt
    },
    rootPressed: {
      textDecoration: 'none',
      color: white,
      backgroundColor: themeDark
    }
  };
};

export const getStyles = (props: IAppHeaderStyleProps): IAppHeaderStyles => {
  const { className, theme } = props;

  const linkStyles: IStyle = {
    color: theme.palette.white,
    '&:active:hover': {
      textDecoration: 'none',
      color: theme.palette.white
    },
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.white
    }
  };

  return {
    root: [
      {
        display: 'grid',
        alignItems: 'center',
        backgroundColor: theme.palette.themePrimary,
        fontFamily:
          'Segoe UI, Segoe UI Web(West European), Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif',
        height: 48,
        borderBottom: '1px solid transparent',
        boxSizing: 'border-box'
      },
      className
    ],
    titleContainer: {
      ...theme.fonts.mediumPlus,
      paddingLeft: 16,
      paddingRight: 12,
      alignSelf: 'center',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      gridColumn: '1 / 3'
    },
    headerItemsContainer: {
      height: 48,
      overflow: 'hidden',
      gridColumn: '3 / 3',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    subComponentStyles: {
      titleLinkStyles: {
        root: {
          ...theme.fonts.mediumPlus,
          fontWeight: FontWeights.semibold,
          ...linkStyles
        }
      },
      commandBarStyles: {
        root: {
          backgroundColor: theme.palette.themePrimary,
          height: 48,
          ...theme.fonts.medium,
          ...linkStyles
        },
        primarySet: {
          backgroundColor: theme.palette.themePrimary,
          ...theme.fonts.medium,
          ...linkStyles
        },
        secondarySet: {
          backgroundColor: theme.palette.themePrimary,
          ...theme.fonts.medium,
          ...linkStyles
        }
      }
    }
  };
};
