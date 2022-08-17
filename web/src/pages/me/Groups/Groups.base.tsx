import React from 'react';
import { classNamesFunction, IProcessedStyleSet } from '@fluentui/react';
import { useTheme } from '@fluentui/react/lib/Theme';

import { IGroupsProps, IGroupsStyleProps, IGroupsStyles } from './Groups.types';
import { PageHeader } from '../../../components';
import { PageSection } from '../../../components/PageSection';

const getClassNames = classNamesFunction<IGroupsStyleProps, IGroupsStyles>();

export const GroupsBase: React.FunctionComponent<IGroupsProps> = (props: IGroupsProps) => {
  const { className, styles } = props;
  const classNames: IProcessedStyleSet<IGroupsStyles> = getClassNames(styles, {
    className,
    theme: useTheme()
  });

  return (
    <div className={classNames.root}>
      <PageHeader title="Groups" />
      <PageSection>
        Group List or something.
      </PageSection>
    </div>
  );
};
