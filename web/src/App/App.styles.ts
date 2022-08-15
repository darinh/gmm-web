import { getGlobalClassNames } from '@fluentui/react';
import { IAppStyleProps, IAppStyles } from './App.types';

const GlobalClassNames = {
  root: 'gmm-app'
};

export const getStyles = (props: IAppStyleProps): IAppStyles => {
  const { className, theme } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [{

    }, classNames.root, className]
  };
};
