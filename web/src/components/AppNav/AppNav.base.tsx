import React from 'react';
import {
  classNamesFunction,
  INavLink,
  INavLinkGroup,
  IProcessedStyleSet,
  Nav,
  Sticky,
  StickyPositionType
} from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';

import { IAppNavProps, IAppNavStyleProps, IAppNavStyles } from './AppNav.types';
import {} from 'react-router-dom';

const getClassNames = classNamesFunction<IAppNavStyleProps, IAppNavStyles>();

export const AppNavBase: React.FunctionComponent<IAppNavProps> = (props: IAppNavProps) => {
  const { className, styles } = props;
  const classNames: IProcessedStyleSet<IAppNavStyles> = getClassNames(styles, {
    className,
    theme: useTheme()
  });

  const handleLinkClick = (_?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
    if (item?.url) window.location.href = item.url;
  };

  const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
          name: 'Home',
          url: '/',
          icon: 'Home'
        }
      ]
    },
    {
      name: 'Groups',
      links: [
        {
          name: 'Groups I own',
          url: '/me/groups'
        }
      ]
    }
  ];

  return (
    <Sticky stickyPosition={StickyPositionType.Header}>
      <div className={classNames.root}>
        <Nav
          styles={classNames.subComponentStyles.navStyles}
          onLinkClick={handleLinkClick}
          ariaLabel="Nav basic example"
          groups={navLinkGroups}
        />
      </div>
    </Sticky>
  );
};
