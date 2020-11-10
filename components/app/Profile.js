import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Switch} from 'react-native-gesture-handler';
let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

export default class Discounts extends Component {
  state = {switchValue: false};
  toggleSwitch = (value) => {
    //onValueChange of the switch this function will be called
    this.setState({switchValue: value});
    alert('Switched');
    //state changes according to switch
    //which will result in re-render the text
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <ImageBackground
            source={require('../../Images/BG1.png')}
            style={{
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                padding: '-1%',
                width: windowWidth * 0.9,
                height: '60%',
                position: 'absolute',
                bottom: '-30%',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 7,
                flex: 1,
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      flex: 0.2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      source={require('../../Images/star.png')}
                    />
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      source={require('../../Images/star.png')}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0.6,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      Level: Rookie
                    </Text>
                  </View>
                  <View style={{flex: 0.2}}>
                    <Image
                      style={{
                        width: 50,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      source={require('../../Images/star.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{flex: 0.05}}></View>
        <View
          style={{
            flex: 0.15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              paddingHorizontal: '10%',
            }}>
            <View>
              <MaterialCommunityIcon
                name={'lightbulb-outline'}
                size={38}
                color="#4a148c"
              />
            </View>
            <View
              style={{
                paddingHorizontal: '5%',
                justifyContent: 'center',
                width: '90%',
              }}>
              <ProgressBar
                progress={0.5}
                color={Colors.green800}
                style={{width: '99%'}}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <View style={{marginRight: '30%'}}>
              <Text style={{textAlign: 'left', alignSelf: 'flex-start'}}>
                Rookie
              </Text>
            </View>
            <View style={{marginLeft: '30%'}}>
              <Text style={{textAlign: 'right', alignSelf: 'flex-end'}}>
                Veteran
              </Text>
            </View>
          </View>
        </View>
        <View style={{flex: 0.55}}>
          <View style={{flex: 0.05, alignItems: 'center', marginBottom: '3%'}}>
            <Text>Purchase 10 more airtime to become a Veteran</Text>
          </View>
          <View style={{flex: 0.5, alignItems: 'center'}}>
            <ImageBackground
              source={require('../../Images/Outflow.png')}
              imageStyle={{borderRadius: 10}}
              style={{
                // backgroundColor: 'red',
                height: windowHeight * 0.09,
                width: windowWidth * 0.85,
                marginBottom: 8,
                alignItems: 'center',
              }}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.3,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Switch
                    onValueChange={this.toggleSwitch}
                    value={this.state.switchValue}
                  />
                </View>

                <View
                  style={{
                    flex: 0.6,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'left',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 17,
                    }}>
                    Switch Profile
                  </Text>
                </View>
                <View style={{flex: 0.3}}></View>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require('../../Images/Outflow.png')}
              imageStyle={{borderRadius: 10}}
              style={{
                // backgroundColor: 'red',
                height: windowHeight * 0.09,
                width: windowWidth * 0.85,
                marginBottom: 8,
                alignItems: 'center',
              }}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.3,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../Images/favorite.png')}
                    style={{height: 40, width: 40}}
                  />
                </View>

                <View
                  style={{
                    flex: 0.6,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'left',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 17,
                    }}>
                    Total Inflow
                  </Text>
                  <Text
                    style={{
                      textAlign: 'left',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 17,
                    }}>
                    8,000
                  </Text>
                </View>
                <View style={{flex: 0.3}}></View>
              </View>
            </ImageBackground>
            <ImageBackground
              source={require('../../Images/button/app-buttons-missions-continue.png')}
              imageStyle={{borderRadius: 10}}
              style={{
                // backgroundColor: 'red',
                height: windowHeight * 0.09,
                width: windowWidth * 0.85,
                marginBottom: 8,
                alignItems: 'center',
              }}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.3,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={require('../../Images/favorite.png')}
                    style={{height: 40, width: 40}}
                  />
                </View>

                <View
                  style={{
                    flex: 0.6,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      textAlign: 'left',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 17,
                    }}>
                    Total Outflow
                  </Text>
                  <Text
                    style={{
                      textAlign: 'left',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 17,
                    }}>
                    8,000
                  </Text>
                </View>
                <View style={{flex: 0.3}}></View>
              </View>
            </ImageBackground>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 10,
                height: '40%',
                width: '85%',
                marginBottom: 8,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 7,
              }}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{
                    flex: 0.2,
                    alignItems: 'center',
                    backgroundColor: '#64ffda',
                    justifyContent: 'center',
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}>
                  <MaterialCommunityIcon name="gift" size={45} color="#fff" />
                </View>
                <View
                  style={{
                    flex: 0.6,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#b0bec5',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    Challenges Won
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topView: {
    flex: 0.25,
  },
});
