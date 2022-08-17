import React from 'react';
import { classNamesFunction, IProcessedStyleSet } from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';

import { IAppContentProps, IAppContentStyleProps, IAppContentStyles } from './AppContent.types';
import { Route } from 'react-router-dom';
import { Groups, Home } from '../../pages';

const getClassNames = classNamesFunction<IAppContentStyleProps, IAppContentStyles>();

export const AppContentBase: React.FunctionComponent<IAppContentProps> = (props: IAppContentProps) => {
  const { className, styles } = props;
  const classNames: IProcessedStyleSet<IAppContentStyles> = getClassNames(styles, {
    className,
    theme: useTheme()
  });

  return (
    <div className={classNames.root}>
      <Route exact path="/" component={Home} />
      <Route exact path="/me/groups" component={Groups} />
    </div>
  );
};
