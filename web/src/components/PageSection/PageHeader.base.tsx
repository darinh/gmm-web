import React from 'react';
import { classNamesFunction, IProcessedStyleSet } from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';

import { IPageHeaderProps, IPageHeaderStyleProps, IPageHeaderStyles } from './PageHeader.types';

const getClassNames = classNamesFunction<IPageHeaderStyleProps, IPageHeaderStyles>();

export const PageHeaderBase: React.FunctionComponent<IPageHeaderProps> = (props: IPageHeaderProps) => {
  const { className, title, styles } = props;
  const classNames: IProcessedStyleSet<IPageHeaderStyles> = getClassNames(styles, {
    className,
    theme: useTheme()
  });

  return (
    <header className={classNames.root}>
      <h1 className={classNames.title}>{title}</h1>
    </header>
  );
};
