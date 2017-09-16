import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
// import codePush from 'react-native-code-push'
import { StackNavigator } from 'react-navigation';
import { ThemeProvider } from 'styled-components/native';
import { COLORS } from '../../assets/styles/constants';
import { FAQ, RailMap, StationDetail, ScheduleInfo } from '../../scenes';
import SegmentedControlTab from 'react-native-segmented-control-tab';

class MyPlayground extends Component {
  constructor(){
    super()
    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = (index) => {
    console.log('tab pressed', index);
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  }

  render() {
    const myStyles = StyleSheet.create({
      container: {
        width: 300
      }
    });
    return (
    <SegmentedControlTab
      values={['Driving', 'Walking', 'test']}
      selectedIndex={this.state.selectedIndex}
      onTabPress={this.handleIndexChange}
      tabsContainerStyle={{width: 150}}
    />);
  }
}


const AppNavigator = StackNavigator({
  Main: {
    screen: RailMap,
    navigationOptions: {
      title: 'Charlotte Light Rail'
    }
  },
  Faq: {
    screen: FAQ,
    navigationOptions: {
      title: 'Help'
    }
  },
  StationDetail: {
    screen: StationDetail,
    navigationOptions: {
      title: 'Station Info'
    }
  },
  StationSchedule: {
    screen: ScheduleInfo,
    navigationOptions: {
      title: 'Station Schedules'
    }
  },
  Playground: {
    screen: MyPlayground,
    navigationOptions: {
      title: 'Playground'
    }
  }
}, {
  initialRouteName: 'Main',
  // initialRouteName: 'Playground',
  navigationOptions: {
    headerStyle: {
      backgroundColor: COLORS.backgroundColorDark,
      ...Platform.select({
        ios: {
          shadowOpacity: 0
        },
        android: {
          elevation: 0
        }
      }),
    },
    headerTintColor: COLORS.primaryTextColor
  }
});

export default class App extends Component {

  componentDidMount() {
    // Uncomment out this line to enable codePush syncing
    // codePush.sync()
  }

  render() {
    return (
      <ThemeProvider theme={COLORS}>
        <AppNavigator />
      </ThemeProvider>
    );
  }
}
