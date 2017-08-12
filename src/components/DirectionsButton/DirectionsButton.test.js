import React from 'react';
import { snapshotStyledComponent } from '../../helpers/testHelpersHOC';
import DirectionsButton from './DirectionsButton';

describe('<DirectionsButton />', () => {
  let props;

  beforeAll(() => {
    props = {
      onPress: jest.fn()
    };
  });

  it('renders correctly', () => {
    snapshotStyledComponent(
      <DirectionsButton {...props} />
    );
  });
});
