import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import renderer from 'react-test-renderer';
import { COLORS } from '../assets/styles/constants';

export const snapshotStyledComponent = (component) => {
  const snapshot = renderer.create(
    <ThemeProvider theme={COLORS}>
      {component}
    </ThemeProvider>
  ).toJSON();
  expect(snapshot).toMatchSnapshot();
};

export const themeStyledComponent = component => (
  <ThemeProvider theme={COLORS}>
    {component}
  </ThemeProvider>
);
