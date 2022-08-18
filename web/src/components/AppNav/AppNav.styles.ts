import { IAppNavStyleProps, IAppNavStyles } from './AppNav.types';

export const getStyles = (props: IAppNavStyleProps): IAppNavStyles => {
  const { className, theme } = props;

  return {
    root: [
      {
        backgroundColor: theme.semanticColors.bodyBackground,
        boxSizing: 'border-box',
        color: theme.semanticColors.bodyText,
        width: 324,
        padding: '32px 32px 0 0'
      },
      className
    ],
    subComponentStyles: {
      navStyles: {
        root: {
          boxSizing: 'border-box',
          overflowY: 'auto',
        },
        chevronIcon: {
          height: 32,
          lineHeight: 32
        },
        chevronButton: {
          ...theme.fonts.medium,
          height: 32,
          lineHeight: 32,
          borderBottom: 0 // remove border ungroup group title
        },
        link: {
          ...theme.fonts.medium, // set link properties
          height: 32,
          lineHeight: 32,
          '&:hover': {
            color: theme.semanticColors.bodyText
          }
        }
      }
    }
  };
};
