import React from 'react';
import renderer from 'react-test-renderer';
import AttributionButton from './AttributionButton.ios';

describe('<AttributionButton />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <AttributionButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
