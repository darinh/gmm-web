import { IPageSectionStyleProps, IPageSectionStyles } from './PageSection.types';

export const getStyles = (props: IPageSectionStyleProps): IPageSectionStyles => {
  const { className, theme } = props;

  return {
    root: [
      {
        padding: 24,
        backgroundColor: theme.semanticColors.bodyBackground,
        marginBottom: 28,
        marginRight: 28,
        boxShadow: theme.effects.elevation4
      },
      className
    ]
  };
};
