import React, { useState, useEffect } from 'react';
import {
  CoherenceHeader,
  FarRightProfilePanelProps,
  FarRightSettings,
  ICoherenceHeaderProps
} from '@coherence-design-system/controls';
import { classNamesFunction, IProcessedStyleSet } from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';

import { IAppHeaderProps, IAppHeaderStyleProps, IAppHeaderStyles } from './AppHeader.types';
import { fetchUser } from '../../store/user.actions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const getClassNames = classNamesFunction<IAppHeaderStyleProps, IAppHeaderStyles>();

export const AppHeaderBase: React.FunctionComponent<IAppHeaderProps> = (props: IAppHeaderProps) => {
  const { className, styles } = props;
  const classNames: IProcessedStyleSet<IAppHeaderStyles> = getClassNames(styles, {
    className,
    theme: useTheme()
  });

  const redirect = window.location.pathname;
  const currentUser = useAppSelector((state) => state.user.currentUser);

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSearch = (newValue: string) => {
    console.log(newValue);
  };

  const farRightSettings: FarRightSettings = currentUser !== undefined
    ? {
        profileSettings: {
          panelSettings: {
            emailAddress: currentUser?.clientPrincipal.userDetails,
            fullName: currentUser?.clientPrincipal.userDetails,
            imageUrl:
              'https://sfmsit.delve.office.com/mt/v3/people/profileimage?userId=dahoove%40microsoft.com&size=L',
            logOutLink: `/.auth/logout?post_logout_redirect_uri=${redirect}`
          }
        }
      }
    : {
        additionalItems: [
          {
            key: 'login-button',
            text: 'Login',
            href: `/.auth/login?post_login_redirect_uri=${redirect}`
          }
        ]
      };

  const headerProps: ICoherenceHeaderProps = {
    headerLabel: 'Group Membership Management',
    appNameSettings: { label: 'Group Membership Management' },
    searchSettings: { onSearch: handleSearch },
    farRightSettings: farRightSettings
  };

  return (
    <header>
      <div className={classNames.root}>
        <CoherenceHeader {...headerProps} />
      </div>
    </header>
  );
};
