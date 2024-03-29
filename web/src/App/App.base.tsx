import React from 'react';
import { classNamesFunction, IProcessedStyleSet } from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';
import { IAppProps, IAppStyleProps, IAppStyles } from './App.types';
import { AppHeader } from '../components/AppHeader';
import { AppNav } from '../components/AppNav';
import { Outlet } from 'react-router-dom';

const getClassNames = classNamesFunction<IAppStyleProps, IAppStyles>();

export const AppBase: React.FunctionComponent<IAppProps> = (props: IAppProps) => {
  const { className, styles } = props;
  const theme = useTheme();
  const classNames: IProcessedStyleSet<IAppStyles> = getClassNames(styles, {
    className,
    theme
  });

  return (
    <div className={classNames.root}>
      <AppHeader />
      <div className={classNames.body}>
        <div className={classNames.nav}>
          <AppNav />
        </div>
        <div className={classNames.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
