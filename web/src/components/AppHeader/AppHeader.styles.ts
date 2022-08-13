import { getGlobalClassNames } from '@fluentui/react';
import { IAppHeaderStyleProps, IAppHeaderStyles } from './AppHeader.types';

const GlobalClassNames = {
  root: 'gmm-app',
};

export const getStyles = (props: IAppHeaderStyleProps): IAppHeaderStyles => {
  const { className, theme } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [
      { },
      classNames.root,
      className
    ]
  };
};