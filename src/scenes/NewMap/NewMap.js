import React, { Component } from 'react';
import { View, Text, Platform, WebView } from 'react-native';

export default class NewMap extends Component {
  render() {
    return (
      <WebView 
        source={{uri: 'https://www.google.com'}}
        style={{marginBottom: 500}}
      />
    );
  }
}