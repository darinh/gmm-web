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
import { useNavigate } from 'react-router-dom';

const getClassNames = classNamesFunction<IAppNavStyleProps, IAppNavStyles>();

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      { name: 'Home', url: '/', icon: 'Home' },
      {
        name: 'Groups',
        url: '',
        links: [
          { name: 'Memberships', url: '/groups/memberOf', icon: 'ReminderGroup' },
          { name: 'Owned', url: '/groups/owned', icon: 'Group' }
        ]
      }
    ]
  }
];

export const AppNavBase: React.FunctionComponent<IAppNavProps> = (props: IAppNavProps) => {
  const { className, styles } = props;
  const classNames: IProcessedStyleSet<IAppNavStyles> = getClassNames(styles, {
    className,
    theme: useTheme()
  });

  const navigate = useNavigate();

  const handleLinkClick = (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
    if (item && item.url.length > 0) {
      navigate(item.url);
      ev?.preventDefault();
    }
  };

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
