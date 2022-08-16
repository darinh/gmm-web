import React from 'react';
import { classNamesFunction, IProcessedStyleSet } from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';

import { IHomeProps, IHomeStyleProps, IHomeStyles } from './Home.types';
import { PageHeader } from '../../components';

const getClassNames = classNamesFunction<IHomeStyleProps, IHomeStyles>();

export const HomeBase: React.FunctionComponent<IHomeProps> = (props: IHomeProps) => {
  const { className, styles } = props;
  const classNames: IProcessedStyleSet<IHomeStyles> = getClassNames(styles, {
    className,
    theme: useTheme()
  });

  return (
    <div className={classNames.root}>
      <PageHeader title='Home' />
      Home Content
    </div>
  );
};
