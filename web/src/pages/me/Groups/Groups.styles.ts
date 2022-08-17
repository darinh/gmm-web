import { FontWeights } from '@fluentui/react';
import { IGroupsStyleProps, IGroupsStyles } from './Groups.types';

export const getStyles = (props: IGroupsStyleProps): IGroupsStyles => {
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
