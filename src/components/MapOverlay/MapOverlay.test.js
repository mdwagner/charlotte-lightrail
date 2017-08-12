import React from 'react';
import { snapshotStyledComponent } from '../../helpers';
import MapOverlay from './MapOverlay.ios';
jest.mock('SegmentedControlIOS');

describe('<MapOverlay />', () => {
  let props;

  beforeAll(() => {
    props = {
      connected: true,
      loading: false,
      mode: 'walking',
      fetchNearest: jest.fn(),
      showCallout: jest.fn(),
      locationDenied: false,
      seeAllStations: jest.fn(),
      navigation: { navigate: jest.fn() }
    };
  });

  it('renders correctly', () => {
    snapshotStyledComponent(
      <MapOverlay {...props} />
    );
  });
});
