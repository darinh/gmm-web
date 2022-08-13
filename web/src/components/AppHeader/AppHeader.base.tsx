import React, {useState, useEffect} from 'react';
import { CoherenceHeader, ICoherenceHeaderProps } from '@coherence-design-system/controls';
import { classNamesFunction, IProcessedStyleSet } from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';

import { IAppHeaderProps, IAppHeaderStyleProps, IAppHeaderStyles } from './AppHeader.types';

const getClassNames = classNamesFunction<IAppHeaderStyleProps, IAppHeaderStyles>();

export const AppHeaderBase: React.FunctionComponent<IAppHeaderProps> = (props: IAppHeaderProps) => {
  const { className, styles } = props;
  const classNames: IProcessedStyleSet<IAppHeaderStyles> = getClassNames(styles, {
    className,
    theme: useTheme()
  });

  const redirect = window.location.pathname;
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    (async () => {
      setUserInfo(await getUserInfo());
    })();
  }, []);

  async function getUserInfo() {
    try {
      const response = await fetch('/.auth/me');
      const payload = await response.json();
      const { clientPrincipal } = payload;
      return clientPrincipal;
    } catch (error) {
      console.error('No profile could be found');
      return undefined;
    }
  }

  const handleSearch = (newValue: string) => {
    console.log(newValue);
  };

  const headerProps: ICoherenceHeaderProps = {
    headerLabel: 'Group Membership Management',
    appNameSettings: { label: 'Group Membership Management' },
    searchSettings: { onSearch: handleSearch },
    farRightSettings: {
      profileSettings: {
        panelSettings: {
          emailAddress: 'dahoove@microsoft.com',
          fullName: 'Darin Hoover',
          imageUrl:
            'https://sfmsit.delve.office.com/mt/v3/people/profileimage?userId=dahoove%40microsoft.com&size=L',
          logOutLink: `/.auth/logout?post_logout_redirect_uri=${redirect}`
        }
      }
    }
  };

  return (
    <header>
      <div className={classNames.root}>
        <CoherenceHeader {...headerProps} />
      </div>
    </header>
  );
};
