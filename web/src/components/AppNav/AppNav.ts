import * as React from 'react';
import { styled } from '@fluentui/react';
import { AppNavBase } from './AppNav.base';
import { IAppNavProps, IAppNavStyleProps, IAppNavStyles } from './AppNav.types';
import { getStyles } from './AppNav.styles';

export const AppNav: React.FunctionComponent<IAppNavProps> = styled<IAppNavProps, IAppNavStyleProps, IAppNavStyles>(
  AppNavBase,
  getStyles,
  undefined,
  {
    scope: 'AppNav'
  }
);
