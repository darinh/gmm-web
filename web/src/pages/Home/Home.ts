import * as React from 'react';
import { styled } from '@fluentui/react';
import { HomeBase } from './Home.base';
import { IHomeProps, IHomeStyleProps, IHomeStyles } from './Home.types';
import { getStyles } from './Home.styles';

export const Home: React.FunctionComponent<IHomeProps> = styled<IHomeProps, IHomeStyleProps, IHomeStyles>(
  HomeBase,
  getStyles,
  undefined,
  {
    scope: 'Home'
  }
);
