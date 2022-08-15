import React, { useEffect } from 'react';
import { classNamesFunction, CommandBar, ICommandBarItemProps, IProcessedStyleSet, Link } from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';

import { IAppHeaderProps, IAppHeaderStyleProps, IAppHeaderStyles } from './AppHeader.types';
import { fetchUser } from '../../store/user.actions';
import { useAppSelector } from '../../store/hooks';
import { getButtonStyles } from './AppHeader.styles';

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

  // const handleSearch = (newValue: string) => {
  //   console.log(newValue);
  // };

  // const farRightSettings: FarRightSettings = currentUser !== undefined
  //   ? {
  //       profileSettings: {
  //         panelSettings: {
  //           emailAddress: currentUser?.clientPrincipal.userDetails,
  //           fullName: currentUser?.clientPrincipal.userDetails,
  //           imageUrl:
  //             'https://sfmsit.delve.office.com/mt/v3/people/profileimage?userId=dahoove%40microsoft.com&size=L',
  //           logOutLink: `/.auth/logout?post_logout_redirect_uri=${redirect}`
  //         }
  //       }
  //     }
  //   : {
  //       additionalItems: [
  //         {
  //           key: 'login-button',
  //           text: 'Login',
  //           href: `/.auth/login?post_login_redirect_uri=${redirect}`
  //         }
  //       ]
  //     };

  // const headerProps: ICoherenceHeaderProps = {
  //   headerLabel: 'Group Membership Management',
  //   appNameSettings: { label: 'Group Membership Management' },
  //   searchSettings: { onSearch: handleSearch },
  //   farRightSettings: farRightSettings
  // };

  const { titleLinkStyles, commandBarStyles } = classNames.subComponentStyles;
  const buttonStyles = getButtonStyles();
  const commandBarItems: ICommandBarItemProps[] = [
    !currentUser
    ? { buttonStyles, key:'loginLink', href: `/.auth/login/aad?post_login_redirect_uri=${redirect}`, text: 'Login' }
    : { buttonStyles, key:'logoutLink', href: `/.auth/logout/aad?post_logout_redirect_uri=${redirect}`, text: 'Logout' }
  ];

  return (
    <header>
      <div className={classNames.root} role='banner' aria-label='header'>
        <div className={classNames.titleContainer}>
          <Link href='/' aria-label='Group Membership Management' styles={titleLinkStyles}>Group Membership Management</Link>
        </div>
        <div className={classNames.headerItemsContainer}>
          <CommandBar items={commandBarItems} styles={commandBarStyles} />
        </div>
      </div>
    </header>
  );
};
