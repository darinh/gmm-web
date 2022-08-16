import { FontWeights } from '@fluentui/react';
import { IPageHeaderStyleProps, IPageHeaderStyles } from './PageHeader.types';

export const getStyles = (props: IPageHeaderStyleProps): IPageHeaderStyles => {
  const { className, theme } = props;

  return {
    root: [
      {
        margin: '52px 0'
      },
      className
    ],
    title: {
      alignItems: 'baseline',
      color: theme.palette.neutralPrimary,
      display: 'flex',
      fontSize: 32,
      fontWeight: FontWeights.semibold,
      lineHeight: 1,
      margin: 0
    }
  };
};
