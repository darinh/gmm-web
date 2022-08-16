import React from 'react';
import {
  classNamesFunction,
  IProcessedStyleSet
} from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';

import { IAppNavProps, IAppNavStyleProps, IAppNavStyles } from './AppNav.types';

const getClassNames = classNamesFunction<IAppNavStyleProps, IAppNavStyles>();

export const AppNavBase: React.FunctionComponent<IAppNavProps> = (props: IAppNavProps) => {
  const { className, styles } = props;
  const classNames: IProcessedStyleSet<IAppNavStyles> = getClassNames(styles, {
    className,
    theme: useTheme()
  });

  return (
    <nav>
      <div className={classNames.root} role="navigation" aria-label="nav">
       Nav Placeholder
      </div>
    </nav>
  );
};
