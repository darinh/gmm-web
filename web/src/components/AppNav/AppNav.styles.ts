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
    ]
  };
};
