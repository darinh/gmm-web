import { IStyle, IStyleFunctionOrObject, ITheme } from '@fluentui/react';
import { IReactProps } from '@fluentui/react/lib/common/React.types';

export interface IPageSectionStyles {
  root: IStyle;
}

export interface IPageSectionStyleProps {
  className?: string;
  theme: ITheme;
}

export interface IPageSectionProps extends IReactProps<HTMLDivElement> {
  /**
   * Optional className to apply to the root of the component.
   */
  className?: string;

  /**
   * Call to provide customized styling that will layer on top of the variant rules.
   */
  styles?: IStyleFunctionOrObject<IPageSectionStyleProps, IPageSectionStyles>;
}
