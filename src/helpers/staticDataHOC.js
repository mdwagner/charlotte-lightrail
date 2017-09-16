import React from 'react';
import staticData from './staticData.json';

export function withStaticData(Component) {
  return class extends React.Component {
    render() {
      return (
        <Component {...this.props} staticData={staticData} />
      );
    }
  };
}
