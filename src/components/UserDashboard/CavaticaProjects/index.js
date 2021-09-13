import React, { useState } from 'react';
import Card from '@ferlab/ui/core/view/GridCard';
import { Badge, Result } from 'antd';

import {
  setUserDimension,
  TRACKING_EVENTS,
  trackUserInteraction,
} from 'services/analyticsTracking';
import { getMsgFromErrorOrElse } from 'utils';

import useCavatica from '../../../hooks/useCavatica';

import CavaticaProvider from './CavaticaProvider';
import Connected from './Connected';
import Create from './Create';
import NotConnected from './NotConnected';

import { antCardHeader } from '../../CohortBuilder/Summary/Cards/StudiesChart.module.css';

const tabList = [
  {
    key: 'Projects',
    tab: 'Projects',
  },
  {
    key: 'Create',
    tab: 'Create',
  },
];

const generateTabsContent = ({
  isConnected,
  projectsError,
  tabToCreate,
  projects,
  loading,
  onProjectCreated,
  onProjectCreationCanceled,
  refresh,
  activeTab,
}) => {
  const NotConnectedComp = () => <NotConnected />;
  const ConnectedComp = (cardProps) => (
    <Connected tabToCreate={tabToCreate(cardProps)} projects={projects} loading={loading} />
  );
  const CreateComp = (cardProps) => (
    <Create
      onProjectCreated={onProjectCreated({ cardProps, refresh })}
      onProjectCreationCancelled={onProjectCreationCanceled(cardProps)}
    />
  );

  if (projectsError) {
    return {
      component: (
        <Result
          style={{ width: '100%' }}
          status="error"
          title={getMsgFromErrorOrElse(projectsError)}
        />
      ),
    };
  }

  if (isConnected) {
    if (activeTab === 'Projects') {
      return {
        component: ConnectedComp,
      };
    } else if (activeTab === 'Create') {
      return {
        component: CreateComp,
      };
    }
  }
  return {
    component: NotConnectedComp,
  };
};

const CavaticaProjects = () => {
  const { isConnected, isCheckingIfConnected } = useCavatica();

  const [activeTab, setActiveTab] = useState('Projects');

  const onProjectCreated = ({ cardProps, refresh }) => (data) => {
    cardProps.setIndex(0);
    // added project data into the data param,
    // not sure of future plans for the data param
    trackUserInteraction({
      category: TRACKING_EVENTS.categories.integration.cavatica,
      action: 'Cavatica Project:  Created',
      label: data.id,
    });

    // refresh cavatica data
    return refresh();
  };

  const onTabChange = (key) => {
    setActiveTab(key);
  };

  const onProjectCreationCanceled = (cardProps) => (data) => {
    cardProps.setIndex(0);
    // added project data into the data param,
    // not sure of future plans for the data param
    trackUserInteraction({
      category: TRACKING_EVENTS.categories.integration.cavatica,
      action: 'Cavatica Project: Canceled',
      label: JSON.stringify({ projectName: data.projectName }),
    });
  };

  const tabToCreate = (cardProps) => () => {
    cardProps.setIndex(1);
  };

  return isCheckingIfConnected ? (
    <Card
      loading
      title={
        <div className={antCardHeader}>
          <span className={'title-dashboard-card'}>Cavatica Projects&nbsp;</span>
        </div>
      }
    />
  ) : (
    <CavaticaProvider isConnected={isConnected}>
      {({ projects, loading, refresh, projectsError }) => {
        setUserDimension('dimension6', JSON.stringify(projects));
        return (
          <Card
            title={
              <div className={antCardHeader}>
                <span className={'title-dashboard-card'}>Cavatica Projects&nbsp;</span>
                <Badge
                  count={isConnected && projects ? projects.length : 0}
                  showZero={isConnected}
                />
              </div>
            }
            tabList={isConnected ? tabList : []}
            onTabChange={(key) => {
              onTabChange(key);
            }}
          >
            {
              generateTabsContent({
                isConnected,
                projectsError,
                tabToCreate,
                projects,
                loading,
                onProjectCreated,
                onProjectCreationCanceled,
                refresh,
                activeTab,
              }).component
            }
          </Card>
        );
      }}
    </CavaticaProvider>
  );
};

export default CavaticaProjects;
