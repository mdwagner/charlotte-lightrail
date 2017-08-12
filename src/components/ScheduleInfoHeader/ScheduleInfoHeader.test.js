import React from 'react';
import { snapshotStyledComponent } from '../../helpers';
import ScheduleInfoHeader from './ScheduleInfoHeader';

jest.mock('SegmentedControlIOS');

describe('<ScheduleInfoHeader />', () => {
  let props;

  beforeAll(() => {
    props = {
      scheduleIndex: 1,
      scheduleValueHandler: jest.fn(),
      stationName: 'Test Station'
    };
  });

  it('renders correctly', () => {
    snapshotStyledComponent(
      <ScheduleInfoHeader {...props} />
    );
  });
});
