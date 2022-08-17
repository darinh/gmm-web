import React from 'react';
import { INavStyles, IStyle, IStyleFunctionOrObject, ITheme } from '@fluentui/react';

export interface IAppNavStyles {
  root: IStyle;
  subComponentStyles: {
    navStyles: Partial<INavStyles>
  }
}

export interface IAppNavStyleProps {
  className?: string;
  theme: ITheme;
}

export interface IAppNavProps extends React.AllHTMLAttributes<HTMLDivElement> {
  /**
   * Optional className to apply to the root of the component.
   */
  className?: string;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<IAppNavStyleProps, IAppNavStyles>;
}
