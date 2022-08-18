import { IGroupListStyleProps, IGroupListStyles } from './GroupList.types';

export const getStyles = (props: IGroupListStyleProps): IGroupListStyles => {
  const { className, } = props;

  return {
    root: [
      { },
      className
    ]
  };
};
