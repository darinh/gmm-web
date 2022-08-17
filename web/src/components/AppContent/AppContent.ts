import * as React from 'react';
import { styled } from '@fluentui/react';
import { AppContentBase } from './AppContent.base';
import { IAppContentProps, IAppContentStyleProps, IAppContentStyles } from './AppContent.types';
import { getStyles } from './AppContent.styles';

export const AppContent: React.FunctionComponent<IAppContentProps> = styled<IAppContentProps, IAppContentStyleProps, IAppContentStyles>(
  AppContentBase,
  getStyles,
  undefined,
  {
    scope: 'AppContent'
  }
);
