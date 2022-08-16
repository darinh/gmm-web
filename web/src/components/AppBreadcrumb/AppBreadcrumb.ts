import * as React from 'react';
import { styled } from '@fluentui/react';
import { AppBreadcrumbBase } from './AppBreadcrumb.base';
import { IAppBreadcrumbProps, IAppBreadcrumbStyleProps, IAppBreadcrumbStyles } from './AppBreadcrumb.types';
import { getStyles } from './AppBreadcrumb.styles';

export const AppBreadcrumb: React.FunctionComponent<IAppBreadcrumbProps> = styled<IAppBreadcrumbProps, IAppBreadcrumbStyleProps, IAppBreadcrumbStyles>(
  AppBreadcrumbBase,
  getStyles,
  undefined,
  {
    scope: 'AppBreadcrumb'
  }
);
