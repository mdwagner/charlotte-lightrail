import React from 'react';
import staticData from './staticData.json';

export function withStaticData(Component) {
  return class extends React.Component {
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
