import React, {Component} from 'react';
// import {NavigationAction} from '@react-navigation/compat';
// import {createStackNavigator} from '@react-navigation/stack';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Animated,
  Button,
  Image,
} from 'react-native';
// let navigation = NavigationAction();
let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

export default class splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Auth');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../Images/splash/LOGO.png')} />
        {/* <Button
          title="Go to Blog Details"
          onPress={() => this.props.navigation.navigate('Walk')}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStartColor: '#fff',
  },
});
