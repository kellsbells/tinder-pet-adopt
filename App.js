import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';
import Card from './SwipeCards';

export default class App extends Component {

  render() {

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Card/>
      </View>
    );
  }
}