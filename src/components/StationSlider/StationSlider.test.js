import React from 'react';
import 'react-native';
import { snapshotStyledComponent } from '../../helpers/snapshotStyledComponent';
import StationSlider from './StationSlider';
import renderer from 'react-test-renderer';

describe('<StationSlider />', () => {
  let props;

  beforeAll(() => {
    props = {
      connected: true,
      loading: false,
      mode: 'walking',
      showCallout: jest.fn(),
      navigation: { navigate: jest.fn() }
    }
  });

  it('renders correctly', () => {
    snapshotStyledComponent(
      <StationSlider {...props} />
    );
  });
});