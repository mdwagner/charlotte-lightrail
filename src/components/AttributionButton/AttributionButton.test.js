import React from 'react';
import AttributionButton from './AttributionButton.ios';
import renderer from 'react-test-renderer';

describe('<AttributionButton />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <AttributionButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
