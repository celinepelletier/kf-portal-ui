import * as React from 'react';
import { compose, branch, renderComponent } from 'recompose';
import { withRouter } from 'react-router-dom';
import { injectState } from 'freactal';
import styled from 'react-emotion';
import { startCase, orderBy } from 'lodash';
import { Row, Col } from 'react-grid-system';

import ChartLoadGate from 'chartkit/components/ChartLoadGate';
import DataProvider from 'chartkit/components/DataProvider';
import MultiHeader from 'uikit/Multicard/MultiHeader';
import { withTheme } from 'emotion-theming';

import { StudiesChart, TopDiagnosesChart, UserInterestsChart } from './charts';
import { withApi } from '../../services/api';
import { publicStatsApiRoot, arrangerProjectId } from '../../common/injectGlobals';

import SavedQueries from './SavedQueries';
import AuthorizedStudies from './AuthorizedStudies';
import CavaticaProjects from './CavaticaProjects';

import { DashboardCard, CardContentSpinner, DashboardMulticard } from './styles';
import { SizeProvider } from 'components/Utils';
import DashboardCardError from './DashboardCardError';
import PropTypes from 'prop-types';

const UserDashboard = styled('div')`
  width: 100%;
  min-height: 600px;
  background-color: ${({ theme }) => theme.backgroundGrey};
`;

const DashboardTitle = styled('h1')`
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: 28px;
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.secondary};
  margin-top: 26px;
  margin-bottom: 24px;
  padding-left: 30px;
`;

const Container = ({ className, children }) => (
  // This is to cancel out the negative margin set by react-grid-system
  <div style={{ marginLeft: '15px', marginRight: '15px' }}>
    <Row className={className} children={children} />
  </div>
);

Container.prototype = {
  children: PropTypes.arrayOf(PropTypes.element),
  className: PropTypes.string.isRequired,
};

const ContainerRow = styled(Container, {
  shouldForwardProp: prop => !['currentWidth'].includes(prop),
})`
  padding-left: ${({ currentWidth = NaN }) => (currentWidth < 500 ? 0 : 15)}px;
  padding-right: ${({ currentWidth = NaN }) => (currentWidth < 500 ? 0 : 15)}px;
`;

const CardSlot = styled(Col)`
  padding-bottom: 30px;
`;

export default compose(
  injectState,
  withRouter,
  withApi,
  withTheme,
  branch(({ state: { loggedInUser } }) => !loggedInUser, renderComponent(() => <div />)),
)(({ state: { loggedInUser }, theme, api }) => (
  <UserDashboard>
    <DashboardTitle>My Dashboard</DashboardTitle>
    {/* [NEXT] SizeProvider here is the only usage of 'react-sizeme' */}
    <SizeProvider>
      {({ size }) => (
        <ContainerRow currentWidth={size.width}>
          <CardSlot sm={12} md={6} lg={6} xl={4}>
            <SavedQueries {...{ api, loggedInUser, theme }} />
          </CardSlot>
          <CardSlot sm={12} md={6} lg={6} xl={4}>
            <AuthorizedStudies />
          </CardSlot>
          <CardSlot sm={12} md={6} lg={6} xl={4}>
            <CavaticaProjects />
          </CardSlot>
          <CardSlot sm={12} md={6} lg={6} xl={4}>
            <DataProvider
              url={`${publicStatsApiRoot}${arrangerProjectId}/studies`}
              api={api}
              transform={data =>
                (data.studies || []).map(study => ({ ...study, label: startCase(study.name) }))
              }
            >
              {fetchedState => {
                const data = fetchedState.data;
                const studies = data && data.length;
                const participants = data
                  ? data.reduce((prev, el) => prev + (el.familyMembers + el.probands), 0)
                  : null;

                return (
                  <DashboardMulticard
                    tabs={[
                      {
                        headerComponent: cardProps => (
                          <MultiHeader
                            headings={[
                              { title: 'Studies', badge: studies },
                              { title: 'Participants', badge: participants },
                            ]}
                          />
                        ),
                        component: cardProps => (
                          <ChartLoadGate
                            Error={DashboardCardError}
                            Loader={CardContentSpinner}
                            fetchedState={fetchedState}
                            Chart={StudiesChart}
                          />
                        ),
                      },
                    ]}
                  />
                );
              }}
            </DataProvider>
          </CardSlot>
          <CardSlot sm={12} md={6} lg={6} xl={4}>
            <DashboardCard title="Member Research Interests">
              <DataProvider
                url={`${publicStatsApiRoot}users/interests`}
                api={api}
                transform={data => data.interests}
              >
                {fetchedState => (
                  <ChartLoadGate
                    Error={DashboardCardError}
                    Loader={CardContentSpinner}
                    fetchedState={fetchedState}
                    Chart={UserInterestsChart}
                  />
                )}
              </DataProvider>
            </DashboardCard>
          </CardSlot>
          <CardSlot sm={12} md={6} lg={6} xl={4}>
            <DashboardCard title="Most Frequent Diagnoses">
              <DataProvider
                url={`${publicStatsApiRoot}${arrangerProjectId}/diagnoses/text`}
                api={api}
                transform={data => {
                  const dxs = data.diagnoses || [];
                  const orderedDxs = orderBy(
                    dxs,
                    diagnosis => diagnosis.familyMembers + diagnosis.probands,
                    'desc',
                  );
                  return orderedDxs.slice(0, 10).map(d => ({ ...d, label: startCase(d.name) }));
                }}
              >
                {fetchedState => (
                  <ChartLoadGate
                    Error={DashboardCardError}
                    Loader={CardContentSpinner}
                    fetchedState={fetchedState}
                    Chart={TopDiagnosesChart}
                  />
                )}
              </DataProvider>
            </DashboardCard>
          </CardSlot>
        </ContainerRow>
      )}
    </SizeProvider>
  </UserDashboard>
));
