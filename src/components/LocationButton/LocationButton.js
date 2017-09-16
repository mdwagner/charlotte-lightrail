import React from 'react';
import PropTypes from 'prop-types';
import { LocationMarkerTouchableOpacity, IconImage } from './LocationButtonCss';

const errorIcon = require('../../assets/icons/location/ic_location_disabled_white.png');
const loadingIcon = require('../../assets/icons/location/ic_location_searching_white.png');
const locationIcon = require('../../assets/icons/location/ic_my_location_white.png');

export default class LocationButton extends React.Component {

  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    seeAllStations: PropTypes.func.isRequired
  }

  getLocationImage() {
    const { error, loading } = this.props;
    if (error) {
      return (
        <IconImage
          inactiveIcon
          source={errorIcon}
        />
      );
    } else if (loading) {
      return (
        <IconImage
          inactiveIcon
          source={loadingIcon}
        />
      );
    }
    return (
      <IconImage source={locationIcon} />
    );
  }

  render() {
    const { seeAllStations } = this.props;
    return (
      <LocationMarkerTouchableOpacity onPress={seeAllStations}>
        {this.getLocationImage()}
      </LocationMarkerTouchableOpacity>
    );
  }
}
