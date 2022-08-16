import React from 'react';
import { ICommandBarStyles, IImageStyles, ILinkStyles, IStyle, IStyleFunctionOrObject, ITheme } from '@fluentui/react';

export interface IAppHeaderStyles {
  root: IStyle;
  titleContainer: IStyle;
  headerItemsContainer: IStyle;
  logo: IStyle;
  withDivider: IStyle;
  subComponentStyles: {
    logoImageStyles: Partial<IImageStyles>,
    titleLinkStyles: Partial<ILinkStyles>;
    commandBarStyles: Partial<ICommandBarStyles>;
  }
}

export interface IAppHeaderStyleProps {
  className?: string;
  theme: ITheme;
}

export interface IAppHeaderProps extends React.AllHTMLAttributes<HTMLDivElement> {
  /**
   * Optional className to apply to the root of the component.
   */
  className?: string;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<IAppHeaderStyleProps, IAppHeaderStyles>;
}