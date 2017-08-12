import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Image } from 'react-native';
import defaults from 'react-native-default-preference';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import LocationButton from '../LocationButton';
import StationSlider from '../StationSlider';
import {
  AboutTouchableOpacity, ContainerView, HeaderContainerView,
  HeaderView, HelpView, OfflineButtonTouchableOpacity, OfflineText
} from './MapOverlayCss';

export default class MapOverlay extends React.Component {

  static propTypes = {
    connected: PropTypes.bool.isRequired,
    error: PropTypes.string,
    fetchNearest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    locationDenied: PropTypes.bool.isRequired,
    mode: PropTypes.string.isRequired, // eslint-disable-line
    nearestStationIndex: PropTypes.number, // eslint-disable-line
    seeAllStations: PropTypes.func.isRequired,
    showCallout: PropTypes.func.isRequired, // eslint-disable-line
    stationDistances: PropTypes.array, // eslint-disable-line
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    })
  }

  state = {
    displaySchedule: false,
    selectedIndex: 1
  }

  handleZeroState = () => {
    const { fetchNearest, locationDenied } = this.props;
    if (locationDenied) {
      Alert.alert('Enable location services in Privacy Settings to see your location and nearest station');
    } else {
      fetchNearest();
    }
  }

  handleIndexChange = (index) => {
    const { fetchNearest } = this.props;
    let value;
    if (index === 0) {
      value = 'driving';
    } else {
      value = 'walking';
    }
    defaults.set('SavedDirectionsChoice', JSON.stringify(value)).catch(err => console.log(err));
    fetchNearest(value);
    this.setState({
      ...this.state,
      selectedIndex: index
    });
  }

  render() {
    const { displaySchedule } = this.state;
    const { connected, error, loading, locationDenied, seeAllStations, mode, fetchNearest } = this.props;
    const { navigate } = this.props.navigation;

    const failText = locationDenied ? 'Location Disabled - Enable' : 'Offline Mode - Try Again';

    return (
      <ContainerView pointerEvents="box-none">
        {!displaySchedule &&
          <HeaderView pointerEvents="box-none">
            <HeaderContainerView>
              <AboutTouchableOpacity onPress={() => navigate('Faq')}>
                <HelpView>
                  <Image
                    // eslint-disable-next-line
                    source={require('../../assets/icons/help/ic_help_white.png')}
                  />
                </HelpView>
              </AboutTouchableOpacity>
              {connected && !locationDenied
                ?
                  <SegmentedControlTab
                    values={['Driving', 'Walking']}
                    selectedIndex={mode === 'driving' ? 0 : 1}
                    onValueChange={(value) => {
                      defaults.set('SavedDirectionsChoice', value.toLowerCase()).catch(err => console.log(err));
                      fetchNearest(value.toLowerCase());
                    }}
                    tintColor="white"
                  />
                :
                  <OfflineButtonTouchableOpacity onPress={() => this.handleZeroState()}>
                    <OfflineText allowFontScaling={false}>{failText}</OfflineText>
                  </OfflineButtonTouchableOpacity>
              }
              <LocationButton seeAllStations={seeAllStations} error={error} loading={loading} />
            </HeaderContainerView>
          </HeaderView>
        }
        <StationSlider {...this.props} />
      </ContainerView>
    );
  }
}
