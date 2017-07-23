import React from 'react';
import { snapshotStyledComponent } from '../../helpers/snapshotStyledComponent';
import MapOverlay from './MapOverlay';
jest.mock('SegmentedControlIOS');
import renderer from 'react-test-renderer';

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
    }
  });

  it('renders correctly', () => {
    snapshotStyledComponent(
      <MapOverlay {...props} />
    );
  });
});