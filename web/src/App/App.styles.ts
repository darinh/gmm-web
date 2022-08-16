import { getGlobalClassNames } from '@fluentui/react';
import { IAppStyleProps, IAppStyles } from './App.types';

const GlobalClassNames = {
  root: 'gmm-app'
};

export const getStyles = (props: IAppStyleProps): IAppStyles => {
  const { className, theme } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    root: [{
      padding: '0 32px'
    }, classNames.root, className],
    body: {
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      justifyContent: 'center',
      maxWidth: 1722,
      margin: '0 auto'
    },
    nav: {
      width: 324
    },
    content: {
      backgroundColor: theme.palette.neutralLighterAlt,
      paddingLeft: 40,
      position: 'relative',
      maxWidth: 'calc(100% - 324px)',
      width: 'calc(100% - 324px)'
    }
  };
};
