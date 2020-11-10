import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {TouchableOpacity} from 'react-native-gesture-handler';
let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

export default class Discounts extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      //Default selected Tab Index for single select SegmentedControlTab
      selectedIndices: [0],
      //Default selected Tab Indexes for multi select SegmentedControlTab
      customStyleIndex: 0,
      //Default selected Tab Indexes for cusatom SegmentedControlTab
    };
  }
  handleSingleIndexSelect = (index: number) => {
    //handle tab selection for single Tab Selection SegmentedControlTab
    this.setState((prevState) => ({...prevState, selectedIndex: index}));
  };

  handleMultipleIndexSelect = (index: number) => {
    //handle tab selection for multi Tab Selection SegmentedControlTab
    const {selectedIndices} = this.state;
    if (selectedIndices.includes(index)) {
      //if included in the selected array then remove
      this.setState((prevState) => ({
        ...prevState,
        selectedIndices: selectedIndices.filter((i) => i !== index),
      }));
    } else {
      //if not included in the selected array then add
      this.setState((prevState) => ({
        ...prevState,
        selectedIndices: [...selectedIndices, index],
      }));
    }
  };

  handleCustomIndexSelect = (index: number) => {
    //handle tab selection for custom Tab Selection SegmentedControlTab
    this.setState((prevState) => ({...prevState, customStyleIndex: index}));
  };
  render() {
    const {selectedIndex, selectedIndices, customStyleIndex} = this.state;
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
                width: windowWidth * 0.9,
                height: windowHeight * 0.111,
                position: 'absolute',
                bottom: '-15%',
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
                  <View style={{flex: 0.3, alignItems: 'center'}}>
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
                  <View style={{flex: 0.6, alignItems: 'center'}}>
                    <Text style={{fontSize: 19, fontWeight: '900'}}>
                      Today's Challenge
                    </Text>
                  </View>
                  <View style={{flex: 0.3}}></View>
                  {/* <View style={{flex: 0.6}}>
                    <Text></Text>
                  </View> */}
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={{flex: 0.025}}></View>
        <View style={{flex: 0.67, padding: 10}}>
          <SegmentedControlTab
            values={['Challenges', 'Challenges won']}
            selectedIndex={customStyleIndex}
            onTabPress={this.handleCustomIndexSelect}
            borderRadius={0}
            tabsContainerStyle={{height: '8%', backgroundColor: '#fff'}}
            tabStyle={{
              backgroundColor: '#Fff',
              borderWidth: 0,
              borderColor: 'transparent',
            }}
            activeTabStyle={{
              backgroundColor: 'white',
              marginTop: 2,
              borderBottomWidth: 2,
              borderRightColor: 0,
              borderLeftColor: 0,
            }}
            tabTextStyle={{color: '#888888', fontWeight: 'bold'}}
            activeTabTextStyle={{color: '#4a148c'}}
          />
          {customStyleIndex === 0 && (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: '#888',
                  marginBottom: 10,
                }}>
                Use any of the GTBank Digital Channels to make payments and
                stand a chance of winning with these merchants
              </Text>
              <ScrollView
                contentContainerStyle={{
                  paddingLeft: 22,
                  paddingRight: 25,
                }}
                showsVerticalScrollIndicator={false}
                style={{}}>
                <View
                  style={{
                    height: windowHeight * 0.22,
                    width: windowWidth * 0.85,

                    marginBottom: windowHeight * 0.02,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 9,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 7,
                  }}>
                  <ImageBackground
                    source={require('../../Images/discount.png')}
                    resizeMode="stretch"
                    style={{
                      width: windowWidth * 0.85,
                      height: windowHeight * 0.22,
                    }}>
                    {/* <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // padding: 5,
                      }}> */}
                    <View
                      style={{
                        flex: 1 / 3,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../Images/slot.png')}
                          style={{
                            width: 70,
                            height: 70,
                            resizeMode: 'contain',
                            flex: 2 / 3,
                          }}
                        />
                        <Text
                          style={{
                            flex: 1 / 3,
                            fontSize: 10,
                            fontWeight: '400',
                          }}>
                          Adeola Odeku, VI Lagos
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 1 / 3}}>
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            flex: 2 / 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: windowWidth * 0.85,
                          }}>
                          <Text
                            style={{
                              flex: 1,
                              fontSize: 12,
                              fontWeight: '400',
                              textAlign: 'center',
                            }}>
                            Get NGN 1,000 free for all purchases above 4,000
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 1 / 3,
                            backgroundColor: 'red',
                            padding: 5,
                            alignItems: 'center',
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              fontSize: 11,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            First 10 Purchases
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={{flex: 0.3 / 3}}></View>
                    <View style={{flex: 0.7 / 3}}>
                      <TouchableOpacity>
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#e611bb',
                            height: (windowHeight * 0.22) / 4,
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontWeight: 'bold',
                              fontSize: 16,
                            }}>
                            ACCEPT CHALLENGE
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    {/* </View> */}
                  </ImageBackground>
                </View>
                <View
                  style={{
                    height: windowHeight * 0.22,
                    width: windowWidth * 0.85,

                    marginBottom: windowHeight * 0.02,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 9,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 7,
                  }}>
                  <ImageBackground
                    source={require('../../Images/discount.png')}
                    resizeMode="stretch"
                    style={{
                      width: windowWidth * 0.85,
                      height: windowHeight * 0.22,
                    }}>
                    {/* <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // padding: 5,
                      }}> */}
                    <View
                      style={{
                        flex: 1 / 3,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../Images/slot.png')}
                          style={{
                            width: 70,
                            height: 70,
                            resizeMode: 'contain',
                            flex: 2 / 3,
                          }}
                        />
                        <Text
                          style={{
                            flex: 1 / 3,
                            fontSize: 10,
                            fontWeight: '400',
                          }}>
                          Adeola Odeku, VI Lagos
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 1 / 3}}>
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            flex: 2 / 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: windowWidth * 0.85,
                          }}>
                          <Text
                            style={{
                              flex: 1,
                              fontSize: 12,
                              fontWeight: '400',
                              textAlign: 'center',
                            }}>
                            Get NGN 1,000 free for all purchases above 4,000
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 1 / 3,
                            backgroundColor: 'red',
                            padding: 5,
                            alignItems: 'center',
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              fontSize: 11,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            First 10 Purchases
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={{flex: 0.3 / 3}}></View>
                    <View style={{flex: 0.7 / 3}}>
                      <TouchableOpacity>
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#e611bb',
                            height: (windowHeight * 0.22) / 4,
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontWeight: 'bold',
                              fontSize: 16,
                            }}>
                            ACCEPT CHALLENGE
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    {/* </View> */}
                  </ImageBackground>
                </View>
                <View
                  style={{
                    height: windowHeight * 0.22,
                    width: windowWidth * 0.85,

                    marginBottom: windowHeight * 0.02,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 9,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 7,
                  }}>
                  <ImageBackground
                    source={require('../../Images/discount.png')}
                    resizeMode="stretch"
                    style={{
                      width: windowWidth * 0.85,
                      height: windowHeight * 0.22,
                    }}>
                    {/* <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // padding: 5,
                      }}> */}
                    <View
                      style={{
                        flex: 1 / 3,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <Image
                          source={require('../../Images/slot.png')}
                          style={{
                            width: 70,
                            height: 70,
                            resizeMode: 'contain',
                            flex: 2 / 3,
                          }}
                        />
                        <Text
                          style={{
                            flex: 1 / 3,
                            fontSize: 10,
                            fontWeight: '400',
                          }}>
                          Adeola Odeku, VI Lagos
                        </Text>
                      </View>
                    </View>
                    <View style={{flex: 1 / 3}}>
                      <View
                        style={{
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            flex: 2 / 3,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: windowWidth * 0.85,
                          }}>
                          <Text
                            style={{
                              flex: 1,
                              fontSize: 12,
                              fontWeight: '400',
                              textAlign: 'center',
                            }}>
                            Get NGN 1,000 free for all purchases above 4,000
                          </Text>
                        </View>
                        <View
                          style={{
                            flex: 1 / 3,
                            backgroundColor: 'red',
                            padding: 5,
                            alignItems: 'center',
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              fontSize: 11,
                              color: 'white',
                              fontWeight: 'bold',
                            }}>
                            First 10 Purchases
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={{flex: 0.3 / 3}}></View>
                    <View style={{flex: 0.7 / 3}}>
                      <TouchableOpacity>
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#e611bb',
                            height: (windowHeight * 0.22) / 4,
                            borderRadius: 10,
                          }}>
                          <Text
                            style={{
                              color: 'white',
                              fontWeight: 'bold',
                              fontSize: 16,
                            }}>
                            ACCEPT CHALLENGE
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    {/* </View> */}
                  </ImageBackground>
                </View>
              </ScrollView>
            </View>
          )}
          {customStyleIndex === 1 && (
            <Text style={styles.tabContent}> Challenges won</Text>
          )}
        </View>
        <View style={{flex: 0.1}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topView: {
    flex: 0.2,
  },
});
