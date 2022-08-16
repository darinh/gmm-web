import { IAppNavStyleProps, IAppNavStyles } from './AppNav.types';

export const getStyles = (props: IAppNavStyleProps): IAppNavStyles => {
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
    ]
  };
};
