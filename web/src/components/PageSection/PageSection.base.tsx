import React from 'react';
import { classNamesFunction, IProcessedStyleSet } from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';

import { IPageSectionProps, IPageSectionStyleProps, IPageSectionStyles } from './PageSection.types';

const getClassNames = classNamesFunction<IPageSectionStyleProps, IPageSectionStyles>();

export const PageSectionBase: React.FunctionComponent<IPageSectionProps> = (props: IPageSectionProps) => {
  const { children, className, styles } = props;
  const classNames: IProcessedStyleSet<IPageSectionStyles> = getClassNames(styles, {
    className,
    theme: useTheme()
  });

  return <section className={classNames.root}>
    {children}
  </section>;
};
