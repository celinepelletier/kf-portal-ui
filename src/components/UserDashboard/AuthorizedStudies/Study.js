import React from 'react';

import Row from 'uikit/Row';
import Column from 'uikit/Column';
import ExternalLink from 'uikit/ExternalLink';
import ProgressBar from 'chartkit/components/ProgressBar';

import {
  studyColumn,
  studyName,
  studyCount,
  studyCodes,
  studyNumberLink,
} from './AuthorizedStudies.module.css';

export default ({
  name,
  studyId,
  consentCodes = [],
  total,
  authorized,
  onStudyAuthorizedClick = () => {},
  onStudyTotalClick = () => {},
}) => (
  <Column className={studyColumn}>
    <Row justifyContent="space-between" pl={0}>
      <div className={studyName}>{name}</div>
      <div className={studyCount}>
        Authorized:{' '}
        <ExternalLink
          className={studyNumberLink}
          onClick={() => {
            onStudyAuthorizedClick(studyId, 'NumberLink');
          }}
          hasExternalIcon={false}
        >
          {authorized.toLocaleString()}
        </ExternalLink>
        {' / '}
        <ExternalLink onClick={onStudyTotalClick} hasExternalIcon={false}>
          {total.toLocaleString()}
        </ExternalLink>{' '}
        files
      </div>
    </Row>
    <div className={studyCodes}>
      Data Use Groups: {consentCodes.join(', ').replace('*', 'Open Access')}
    </div>
    <ProgressBar
      analyticsTracking={{ category: `Authorized Studies`, label: `studyId: ${studyId}` }}
      onClick={() => {
        onStudyAuthorizedClick(studyId, 'ProgressBar');
      }}
      percent={(authorized / total) * 100}
      height={10}
    />
  </Column>
);
