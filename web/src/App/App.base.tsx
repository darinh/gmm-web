import React from 'react';
import { CoherenceNav, ICoherenceNavProps } from '@coherence-design-system/controls';
import { classNamesFunction, IProcessedStyleSet } from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';

import { IAppProps, IAppStyleProps, IAppStyles } from './App.types';
import { AppHeader } from '../components/AppHeader';

const getClassNames = classNamesFunction<IAppStyleProps, IAppStyles>();

export const AppBase: React.FunctionComponent<IAppProps> = (props: IAppProps) => {
  const { className, styles } = props;
  const theme = useTheme();
  const classNames: IProcessedStyleSet<IAppStyles> = getClassNames(styles, {
    className,
    theme
  });

  const navProps: ICoherenceNavProps = {
    appName: 'Group Membership Management',
    groups: []
  };

  return (
    <div className={classNames.root}>
      <AppHeader />
      <nav>
        <CoherenceNav {...navProps} />
      </nav>
    </div>
  );
};
