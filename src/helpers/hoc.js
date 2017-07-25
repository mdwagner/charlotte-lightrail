import React from 'react';
// import { ThemeProvider } from 'styled-components/native';
// import { COLORS } from '../assets/styles/constants';
// import renderer from 'react-test-renderer';
import { themeStyledComponent, snapshotStyledComponent } from './';

// export const snapshotStyledComponent = (component) => {
//   const snapshot = renderer.create(
//     <ThemeProvider theme={COLORS}>
//       {component}
//     </ThemeProvider>
//   ).toJSON()
//   expect(snapshot).toMatchSnapshot();
// };

export function withHelpers(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.themeStyledComponent = themeStyledComponent.bind(this);
      this.snapshotStyledComponent = snapshotStyledComponent.bind(this);
    }
    render() {
      const newProps = {
        themeStyledComponent: this.themeStyledComponent,
        snapshotStyledComponent: this.snapshotStyledComponent
      };
      return (
        <Component {...newProps} />
      );
    }
  };
}