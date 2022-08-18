import React from 'react';
import { IColumn, IStyle, IStyleFunctionOrObject, ITheme } from '@fluentui/react';
import { Group } from '../../models/Group';

export type ItemColumn<T> = IColumn & {
  fieldName: keyof T;
};

export interface IGroupListStyles {
  root: IStyle;
}

export interface IGroupListStyleProps {
  className?: string;
  theme: ITheme;
}

export interface IGroupListProps extends React.AllHTMLAttributes<HTMLDivElement> {
  columns: ItemColumn<Group>[];
  items: Group[];
  /**
   * Optional className to apply to the root of the component.
   */
  className?: string;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<IGroupListStyleProps, IGroupListStyles>;
}
