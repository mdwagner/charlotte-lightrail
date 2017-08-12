import React from 'react';
import PropTypes from 'prop-types';
import { BubbleTouchableOpacity, ActiveIconImage } from './DirectionsButtonCss';

const iconImage = require('../../assets/icons/directions/ic_directions_white_36pt.png');

export default class DirectionsButton extends React.Component {

  static propTypes = {
    onPress: PropTypes.func.isRequired
  }

  render() {
    const { onPress } = this.props;

    return (
      <BubbleTouchableOpacity onPress={onPress}>
        <ActiveIconImage source={iconImage} />
      </BubbleTouchableOpacity>
    );
  }
}
