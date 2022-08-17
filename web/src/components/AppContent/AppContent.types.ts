import React from 'react';
import { IStyle, IStyleFunctionOrObject, ITheme } from '@fluentui/react';

export interface IAppContentStyles {
  root: IStyle;
}

export interface IAppContentStyleProps {
  className?: string;
  theme: ITheme;
}

export interface IAppContentProps extends React.AllHTMLAttributes<HTMLDivElement> {
  /**
   * Optional className to apply to the root of the component.
   */
  className?: string;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<IAppContentStyleProps, IAppContentStyles>;
}
