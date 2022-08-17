import * as React from 'react';
import { styled } from '@fluentui/react';
import { PageSectionBase } from './PageSection.base';
import { IPageSectionProps, IPageSectionStyleProps, IPageSectionStyles } from './PageSection.types';
import { getStyles } from './PageSection.styles';

export const PageSection: React.FunctionComponent<IPageSectionProps> = styled<IPageSectionProps, IPageSectionStyleProps, IPageSectionStyles>(
  PageSectionBase,
  getStyles,
  undefined,
  {
    scope: 'PageSection'
  }
);
