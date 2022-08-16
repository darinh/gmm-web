import { IAppBreadcrumbStyleProps, IAppBreadcrumbStyles } from './AppBreadcrumb.types';

export const getStyles = (props: IAppBreadcrumbStyleProps): IAppBreadcrumbStyles => {
  const { className, theme } = props;

  return {
    root: [
      {
        display: 'grid',
        alignItems: 'center',
        color: theme.semanticColors.bodyText,
        ...theme.fonts.medium,
        height: 54,
        margin: '0 auto',
        borderBottom: '1px solid transparent',
        boxSizing: 'border-box'
      },
      className
    ]
  };
};
