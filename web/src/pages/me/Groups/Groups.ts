import * as React from 'react';
import { styled } from '@fluentui/react';
import { GroupsBase } from './Groups.base';
import { IGroupsProps, IGroupsStyleProps, IGroupsStyles } from './Groups.types';
import { getStyles } from './Groups.styles';

export const Groups: React.FunctionComponent<IGroupsProps> = styled<IGroupsProps, IGroupsStyleProps, IGroupsStyles>(
  GroupsBase,
  getStyles,
  undefined,
  {
    scope: 'Groups'
  }
);
