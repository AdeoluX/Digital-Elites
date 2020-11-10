import React from 'react';
import LottieView from 'lottie-react-native';

export default class BasicExample extends React.Component {
  render() {
    return (
      <LottieView
        style={{width: 100, height: 100}}
        source={require('./accounting.json')}
        autoPlay
        loop
      />
    );
  }
}
