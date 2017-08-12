import React from 'react';
import PropTypes from 'prop-types';
import { SegmentedControlIOS } from 'react-native';
import { WrapView, TitleText, ScheduleSelectorView } from './ScheduleInfoHeaderCss';
import { withHelpers } from '../../helpers';

class ScheduleInfoHeader extends React.Component {

  static propTypes = {
    scheduleIndex: PropTypes.number.isRequired,
    scheduleValueHandler: PropTypes.func.isRequired,
    stationName: PropTypes.string.isRequired,
    helpers: PropTypes.shape({
      getScheduleDay: PropTypes.func.isRequired,
      deviceProps: PropTypes.shape({
        deviceScreen: PropTypes.object.isRequired
      })
    })
  }

  state = {
    scheduleIndex: this.props.helpers.getScheduleDay().index,
    scheduleValue: this.props.helpers.getScheduleDay().day
  };

  render() {
    const { scheduleIndex, scheduleValueHandler, stationName } = this.props;
    const { deviceScreen } = this.props.helpers.deviceProps;
    return (
      <WrapView width={deviceScreen.width}>
        <TitleText allowFontScaling={false}>{stationName}</TitleText>
        <ScheduleSelectorView>
          <SegmentedControlIOS
            values={['Weekday', 'Saturday', 'Sunday']}
            selectedIndex={scheduleIndex}
            onChange={e => this.setState({ scheduleIndex: e.nativeEvent.selectedSegmentIndex })}
            onValueChange={value => scheduleValueHandler(value)}
            tintColor="white"
          />
        </ScheduleSelectorView>
      </WrapView>
    );
  }
}

export default withHelpers(ScheduleInfoHeader);
