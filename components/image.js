import React, { Component } from 'react';
import { AppRegistry, Image, Dimensions } from 'react-native';

export default class Cats extends Component {
  render() {
    const width = Dimensions.get('window').width;
    let pic = {
      uri: 'https://www.petmd.com/sites/default/files/sleepy-cat-125522297.jpg'
    };
    return (
      <Image source={pic} style={{width, height: 200}}/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => Cats);
