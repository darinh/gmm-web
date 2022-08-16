import React, { useEffect } from 'react';
import {
  classNamesFunction,
  CommandBar,
  ICommandBarItemProps,
  Image,
  IProcessedStyleSet,
  Link
} from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';

import { IAppHeaderProps, IAppHeaderStyleProps, IAppHeaderStyles } from './AppHeader.types';
import { fetchUser } from '../../store/user.api';
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
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const { titleLinkStyles, commandBarStyles, logoImageStyles } = classNames.subComponentStyles;
  const commandBarItems: ICommandBarItemProps[] = [
    !currentUser
      ? {
          key: 'loginLink',
          href: `/.auth/login/aad?post_login_redirect_uri=${redirect}`,
          text: 'Login'
        }
      : {
          key: 'logoutLink',
          href: `/.auth/logout/aad?post_logout_redirect_uri=${redirect}`,
          text: 'Logout'
        }
  ];

  return (
    <header>
      <div className={classNames.root} role="banner" aria-label="header">
        <div className={classNames.titleContainer}>
          <Link className={classNames.logo} href="https://microsoft.com" itemProp="url" aria-label="Microsoft">
            <Image src="/microsoft-logo.png" role="presentation" aria-hidden="true" styles={logoImageStyles} />
          </Link>
          <div className={classNames.withDivider}>
            <Link href="/" aria-label="Group Membership Management" styles={titleLinkStyles}>
              Group Membership Management
            </Link>
          </div>
        </div>
        <div className={classNames.headerItemsContainer}>
          <CommandBar items={commandBarItems} styles={commandBarStyles} />
        </div>
      </div>
    </header>
  );
};
