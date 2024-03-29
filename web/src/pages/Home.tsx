import React from 'react';
import { Page } from '../components/Page';
import { PageHeader } from '../components/PageHeader';
import { PageSection } from '../components/PageSection';

export const Home: React.FunctionComponent = () => {
  return (
    <Page>
      <PageHeader title="Home" />
      <PageSection>
        <h2>Welcome to the Group Membership Management interface!</h2>

        <h3>About GMM</h3>

        <p>
          Group Membership Management (GMM) provides capabilities to systematically manage the membership of
          M365 Groups by syncing members based on existing security group(s), organizational structure, and
          personnel information. GMM helps you seamlessly manage your M365 Groups in Yammer, Teams, Stream,
          Outlook group, and other modern apps, enabling cloud-based collaboration and secure access to
          resources.
        </p>

        <p>
          GMM can be used to help organization leaders and administrators reduce the administrative overhead
          of keeping M365 Groups membership updated. GMM was recently launched as an open-source tool on
          GitHub to make this solution available to external customers.
        </p>
      </PageSection>
      <PageSection>
        <h2>Common Scenarios</h2>

        <p>If your scenario fits in any of the descriptions below, GMM may be the solution for you!</p>

        <h3>Sync from Existing Groups</h3>
        <p>
          Existing Distribution List (DL), Distribution Group(DG), Security Group(SG), Nested groups are well
          managed and you would like to systematically populate the members from existing DLs, DGs, and SGs to
          your Yammer community, Teams site, Stream group, or other M365 apps.
        </p>

        <h3>Sync from Custom Membership Sources</h3>
        <p>
          Your membership definition can be obtained by a custom membership source. Implementing this will
          require setting up a custom function and database.
        </p>

        <h3>Example scenarios where GMM can help</h3>
        <ul>
          <li>
            Corporate communications manager Megan wants to setup a Microsoft Teams team for their North
            America sales leader Adele.
          </li>
          <li>
            Membership of the team should include all Sales employees in US and Canada, and the Global Sales
            Support teams.
          </li>
          <li>
            Aggregate membership would be over 700 members and Megan does not want to manually manage the
            membership of the team and risk it not being accurate or current.
          </li>
          <li>
            Megan wants to leverage existing security groups (or could be distributed groups) that already
            have the membership she needs. These security groups are “SalesUSSG”, “SalesCanadaSG” and
            “GlobalSalesSupportSG”.
          </li>
          <li>Megan creates a team called “North America Sales Comms” in Microsoft Teams.</li>
          <li>
            Megan works with her company&apos;s IT admin to set up the GMM sync for this group with the
            following criteria: Source groups: “SalesUSSG”, “SalesCanadaSG” and “GlobalSalesSupportSG”
            Destination group: “North America Sales Comms”
          </li>
          <li>
            IT admin kicks off the onboarding sync for “North America Sales Comms” group and GMM generates the
            membership list based on the source groups&apos; memberships at the time of execution.
          </li>
          <li>
            From then on, GMM periodically runs at specified intervals, set by the admin, to keep the
            membership current with the membership changes on the source groups.
          </li>
        </ul>
      </PageSection>
      <PageSection>
        <h2>Pre-Requisites</h2>
        <ul>
          <li>
            Azure subscription - The tool is based on .Net, Azure Functions and Azure Table Storage. All of
            these are requirements and must be deployed onto the Azure subscription.
          </li>
          <li>PowerShell v5.1 or later</li>
          <li>Access to Azure DevOps Repository and Pipelines</li>
          <li>Visual Studio Community, Professional or Enterprise Edition(s) or Visual Studio Code</li>
        </ul>
      </PageSection>
      <PageSection>
        <h2>Tool capabilities</h2>
        <h3>Provided as input</h3>

        <ul>
          <li>Source group(s). These can be nested several levels deep.</li>
          <li>Destination group (Microsoft 365 Group)</li>
          <li>Frequency of sync (as set by the Tenant admin)</li>
        </ul>
        <h3>Outcome</h3>
        <ul>
          <li>
            Flat list membership of the destination group kept in sync with the aggregated membership from
            source groups
          </li>
          <li>
            Note: Membership changes to the destination group outside of the tool are overwritten by the tool.
            Membership changes need to be made to the source groups for them to persist.
          </li>
        </ul>
      </PageSection>
    </Page>
  );
};
