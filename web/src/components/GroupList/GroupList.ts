import * as React from 'react';
import { styled } from '@fluentui/react';
import { GroupListBase } from './GroupList.base';
import { IGroupListProps, IGroupListStyleProps, IGroupListStyles } from './GroupList.types';
import { getStyles } from './GroupList.styles';

export const GroupList: React.FunctionComponent<IGroupListProps> = styled<IGroupListProps, IGroupListStyleProps, IGroupListStyles>(
  GroupListBase,
  getStyles,
  undefined,
  {
    scope: 'GroupList'
  }
);
