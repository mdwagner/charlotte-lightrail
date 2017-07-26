import React from 'react';
import * as configHelpers from './config';
import * as deviceHelpers from './device';
import * as helperHelpers from './helpers';
import * as mapSetupHelpers from './mapSetup';
import * as scheduleHelpers from './scheduleCalcs';
import staticData from './staticData.json';

export function withHelpers(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
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

export function withStaticData(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const newProps = {
        staticData
      };
      return (
        <Component {...this.props} staticData={newProps} />
      );
    }
  };
}