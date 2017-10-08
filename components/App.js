import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

// components imports
import SectionListBasics from './sectionlist';
import Cats from './image';
import LotsOfGreetings from './prop_practice';
import PizzaTranslator from './input';

// component imports not added into render
import Touchables from './touchables';
import FlatListBasics from './flatlist';
import BlinkApp from './state_practice';
import Movies from './fetching';
// need to add png images to render
// import Scrollview from './scrollview'

// Platform.select - returns the value for the platform you are currently running on.
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// <View/> = <div/>
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text>
          { instructions }
        </Text>
        <Cats/>
        <LotsOfGreetings/>
        <PizzaTranslator/>
        <SectionListBasics/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'green',
    fontWeight: 'bold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
