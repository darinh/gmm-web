import React from 'react';
import { Page } from '../components/Page';
import { PageHeader } from '../components/PageHeader';
import { PageSection } from '../components/PageSection';

export const GroupsOwned: React.FunctionComponent = () => {
  return (
    <Page>
      <PageHeader title="Groups I Own" />
      <PageSection>Group content.</PageSection>
    </Page>
  );
};
