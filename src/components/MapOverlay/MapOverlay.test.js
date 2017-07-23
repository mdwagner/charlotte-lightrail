import React from 'react';
import { snapshotStyledComponent } from '../../helpers/snapshotStyledComponent';
import MapOverlay from './MapOverlay.ios';
jest.mock('react-native-user-defaults', () => jest.fn());
jest.mock('SegmentedControlIOS');
import renderer from 'react-test-renderer';

describe('<MapOverlay />', () => {
  let props;

  beforeAll(() => {
    // ReactNative.mockImplementation(() => ({ Platform: 'ios' }));
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
    // const MapOverlay = require('./MapOverlay');
    snapshotStyledComponent(
      <MapOverlay {...props} />
    );
  });
});