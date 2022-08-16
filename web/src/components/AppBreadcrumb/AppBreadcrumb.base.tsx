import React from 'react';
import { Breadcrumb, classNamesFunction, IProcessedStyleSet } from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';

import { IAppBreadcrumbProps, IAppBreadcrumbStyleProps, IAppBreadcrumbStyles } from './AppBreadcrumb.types';

const getClassNames = classNamesFunction<IAppBreadcrumbStyleProps, IAppBreadcrumbStyles>();

export const AppBreadcrumbBase: React.FunctionComponent<IAppBreadcrumbProps> = (
  props: IAppBreadcrumbProps
) => {
  const { className, styles } = props;
  const classNames: IProcessedStyleSet<IAppBreadcrumbStyles> = getClassNames(styles, {
    className,
    theme: useTheme()
  });

  return (
    <div className={classNames.root} aria-label="nav">
      <Breadcrumb items={[{ key: 'home', text: 'home' }]} />
    </div>
  );
};
