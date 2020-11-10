import React, {Component} from 'react';
import one from '../../Animations/analytics.json';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Animated,
  Image,
} from 'react-native';
import LottieView from 'lottie-react-native';
let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;
const photos = [
  {
    uri: require('../../Images/walkthrough/2.png'), //'https://cdn.skillflow.io/resources/img/skillflowninja.png',
    boldText: 'Smarter Analytics',
    smallText:
      'Managing your Money can be the easiest thing you can do all day',
  },
  {
    uri: require('../../Images/walkthrough/1.png'), //'chartopen.json',
    boldText: 'Daily Rewards',
    smallText: 'Fulfill merchants daily challenge and enjoy massive deals',
  },
  {
    uri: require('../../Images/walkthrough/4.png'), //'chartopen.json',
    boldText: 'Earn Points',
    smallText: 'Logging daily and perform transactions to earn points',
  },
  {
    uri: require('../../Images/walkthrough/3.png'), // 'chartopen.json',
    boldText: 'Switch Profile',
    smallText: 'Switch easily from your personal to merchant account',
  },
];
export default class walkthrough extends Component {
  scrollX = new Animated.Value(0);
  render() {
    let position = Animated.divide(this.scrollX, windowWidth);
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.8, backgroundColor: '#000'}}>
          <ScrollView
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              // Animated.event returns a function that takes an array where the first element...
              [{nativeEvent: {contentOffset: {x: this.scrollX}}}], // ... is an object that maps any nativeEvent prop to a variable
            )} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
            scrollEventThrottle={16}>
            {photos.map((source, i) => {
              return (
                <View key={i} style={styles.firstView}>
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: 10,
                    }}>
                    {/* <LottieView
                      style={{
                        // width: windowWidth * 0.35,
                        height: windowHeight * 0.45,
                      }}
                      source={source.uri}
                      autoPlay
                      // loop
                    /> */}
                    <Image
                      source={source.uri}
                      // style={{
                      //   height: windowHeight * 0.37,
                      //   width: windowWidth * 0.85,
                      // }}
                    />
                    <Text
                      style={{
                        color: '#1a237e',
                        fontSize: 28,
                        paddingTop: windowHeight * 0.07,
                        fontWeight: 'bold',
                      }}>
                      {source.boldText}
                    </Text>
                    <Text
                      style={{
                        color: '#6f79a8aa',
                        fontSize: 21,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        paddingTop: windowHeight * 0.03,
                      }}>
                      {source.smallText}
                    </Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            flex: 0.05,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {photos.map((_, i) => {
            // the _ just means we won't use that parameter
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
              outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
              // inputRange: [i - 0.50000000001, i - 0.5, i, i + 0.5, i + 0.50000000001], // only when position is ever so slightly more than +/- 0.5 of a dot's index
              // outputRange: [0.3, 1, 1, 1, 0.3], // is when the opacity changes from 1 to 0.3
              extrapolate: 'clamp', // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
            });
            return (
              <Animated.View // we will animate the opacity of the dots so use Animated.View instead of View here
                key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                style={{
                  opacity,
                  height: 10,
                  width: 10,
                  backgroundColor: '#1a237e',
                  margin: 8,
                  borderRadius: 5,
                }}
              />
            );
          })}
        </View>
        <View
          style={{
            flex: 0.15,
            backgroundColor: '#fff',
            justifyContent: 'center',
            padding: 7,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={{
                height: windowHeight / 13,
                width: windowWidth / 2.7,
                backgroundColor: '#1a237e',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: windowWidth / 2.2 / 2,
              }}>
              <Text style={{color: '#fff', fontSize: 20}}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  firstView: {
    width: windowWidth,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  secondView: {
    width: windowWidth,
    backgroundColor: '#9C27B0',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  thirdView: {
    width: windowWidth,
    backgroundColor: '#3F51B5',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  forthView: {
    width: windowWidth,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
