import { FontWeights } from '@fluentui/react';
import { IAppHeaderStyleProps, IAppHeaderStyles } from './AppHeader.types';

export const getStyles = (props: IAppHeaderStyleProps): IAppHeaderStyles => {
  const { className, theme } = props;

  return {
    root: [
      {
        display: 'grid',
        alignItems: 'center',
        backgroundColor: theme.semanticColors.bodyBackground,
        color: theme.semanticColors.bodyText,
        ...theme.fonts.medium,
        height: 54,
        maxWidth: 1636,
        margin: '0 auto',
        borderBottom: '1px solid transparent',
        boxSizing: 'border-box'
      },
      className
    ],
    titleContainer: {
      height: 54,
      ...theme.fonts.mediumPlus,
      alignSelf: 'center',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      gridColumn: '1 / 3'
    },
    headerItemsContainer: {
      overflow: 'hidden',
      gridColumn: '3 / 3',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    logo: {
      height: 54,
      padding: '16px 6px 16px 0',
      width: 125
    },
    withDivider: {
      position: 'relative',
      '::before': {
        borderLeft: `2px solid #000`,
        height: 24,
        content: '""',
        paddingLeft: 24,
        marginLeft: 7,
        position: 'absolute',
        left: 0
      }
    },
    subComponentStyles: {
      logoImageStyles: {
        image: {
          margin: '16px 6 16px 0',
          maxWidth: 'none',
          width: 108
        }
      },
      titleLinkStyles: {
        root: {
          height: 54,
          ...theme.fonts.large,
          fontWeight: FontWeights.semibold,
          color: theme.palette.neutralSecondary,
          marginLeft: 32,
          padding: '16px 10px',
          '&:active:hover': {
            textDecoration: 'none',
            color: theme.palette.neutralSecondary
          },
          '&:hover': {
            textDecoration: 'none',
            color: theme.palette.neutralSecondary
          },
          '&:focus': {
            border: 'none',
            textDecoration: 'none',
            color: theme.palette.neutralSecondary,
            outline: 0
          },
          
        }
      },
      commandBarStyles: {
        root: {
          height: 54,
          ...theme.fonts.medium
        }
      }
    }
  };
};
