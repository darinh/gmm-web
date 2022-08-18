import React from 'react';
import { GroupList, ItemColumn, Page, PageHeader, PageSection } from '../components';
import { Group } from '../models/Group';

export const GroupMemberships: React.FunctionComponent = () => {
  const columns: ItemColumn<Group>[] = [
    {
      key: 'column1',
      name: 'Name',
      fieldName: 'name',
      minWidth: 210,
      maxWidth: 350,
      isRowHeader: true,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      sortAscendingAriaLabel: 'Sorted A to Z',
      sortDescendingAriaLabel: 'Sorted Z to A',
      isPadded: true
    },
    {
      key: 'column2',
      name: 'Group Type',
      fieldName: 'groupType',
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      isPadded: true
    },
    {
      key: 'column3',
      name: 'Membership',
      fieldName: 'membership',
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      isCollapsible: true
    },
    {
      key: 'column4',
      name: 'Applications',
      fieldName: 'applications',
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      isCollapsible: true
    }
  ];

  const testItems: Group[] = [
    {
      id: '1',
      name: 'charliebell-directs',
      groupType: 'M365',
      membership: 'Dynamic',
      applications: []
    },
    {
      id: '2',
      name: 'charliebell-organdfriends',
      groupType: 'M365',
      membership: 'Dynamic',
      applications: []
    },
    {
      id: '3',
      name: 'charliebell-slc',
      groupType: 'M365',
      membership: 'Dynamic',
      applications: []
    }
  ];

  return (
    <Page>
      <PageHeader title="Group Memberships" />
      <PageSection>
        <GroupList columns={columns} items={testItems} />
      </PageSection>
    </Page>
  );
};
