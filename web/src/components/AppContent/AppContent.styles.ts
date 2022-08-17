import { IAppContentStyleProps, IAppContentStyles } from './AppContent.types';

export const getStyles = (props: IAppContentStyleProps): IAppContentStyles => {
  const { className } = props;

  return {
    root: [
      {
      },
      className
    ]
  };
};
