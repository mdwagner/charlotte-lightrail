import React from 'react';
import * as configHelpers from './config';
import * as deviceHelpers from './device';
import * as helperHelpers from './helpers';
import * as mapSetupHelpers from './mapSetup';
import * as scheduleHelpers from './scheduleCalcs';

export function withHelpers(Component) {
  return class extends React.Component {
    render() {
      const newProps = {
        ...configHelpers,
        ...deviceHelpers,
        ...helperHelpers,
        ...mapSetupHelpers,
        ...scheduleHelpers
      };
      return (
        <Component {...this.props} helpers={newProps} />
      );
    }
  };
}
