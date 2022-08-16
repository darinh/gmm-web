import { FontWeights } from '@fluentui/react';
import { IHomeStyleProps, IHomeStyles } from './Home.types';

export const getStyles = (props: IHomeStyleProps): IHomeStyles => {
  const { className, theme } = props;

  return {
    root: [
      { },
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
