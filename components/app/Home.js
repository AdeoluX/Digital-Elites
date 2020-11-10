import React, {Component} from 'react';
import MyContext from '../contextAPI/MyContext';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [
        {
          id: '1',
          Category: 'Health',
          Percentage: '33.3%',
          Amount: '8,000',
          ImagePath: 'heart-pulse',
        },
        {
          id: '2',
          Category: 'Shopping',
          Percentage: '33.3%',
          Amount: '8,000',
          ImagePath: 'cart-outline',
        },
        {
          id: '3',
          Category: 'Airtime',
          Percentage: '33.3%',
          Amount: '8,000',
          ImagePath: 'cellphone-iphone',
        },
      ],
    };
  }
  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}} />
    );
  };
  GetItem(item) {
    //Function for click on an item
    Alert.alert(item);
  }
  static contextType = MyContext;
  componentDidMount() {
    const user = this.context;
    // alert(user.name);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <View
            style={{
              flexDirection: 'row',
              flex: 0.9,
              alignItems: 'center',
              alignContent: 'center',
              // justifyContent: 'space-between',
            }}>
            <View
              style={{
                marginLeft: '10%',
                alignContent: 'center',
                justifyContent: 'center',
                //alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                Hi Emmanuel,
              </Text>
              <View>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Level: Rookie
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginLeft: '10%',
                backgroundColor: 'white',
                height: '20%',
                width: '45%',
                alignItems: 'center',
                justifyContent: 'center',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}>
              <Text
                style={{
                  color: '#4a148c',
                  marginRight: '4%',
                  fontWeight: 'bold',
                }}>
                Account: 044290xxxx
              </Text>
              <TouchableOpacity style={{marginLeft: '1.5%'}}>
                <Text style={{color: '#4a148c'}}>></Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 0.1, marginTop: 10}}>
            <Text
              style={{
                color: 'white',
                marginTop: -30,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Purchase 10 more airtime to become a Veteran
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 0.25,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {/* <View
            style={{
              backgroundColor: 'white',
              height: '85%',
              width: '95%',
            }}></View> */}
          <ImageBackground
            source={require('../../Images/home.png')}
            style={{
              height: '85%',
              width: '95%',
              // alignItems: 'center',
            }}
            imageStyle={{
              resizeMode: 'contain',
              position: 'absolute',
              left: '2.8%',
            }}>
            <View style={{padding: '8%', justifyContent: 'space-between'}}>
              <Text
                style={{
                  marginBottom: '5%',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                {' '}
                Save More. Do More
              </Text>
              <Text
                style={{
                  // marginBottom: '5%',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 16.5,
                }}>
                {' '}
                See top Merchant DISCOUNT deals{' '}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 0.4,
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: windowHeight * 0.05,
          }}>
          <View
            style={{
              height: windowHeight / 2.2,
              width: windowWidth * 0.85,
              backgroundColor: 'white',
              borderRadius: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: '4%',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>History</Text>
              </View>
              <View style={{justifyContent: 'flex-end'}}>
                <Text>SEPTEMBER</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: '4%',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{fontSize: 16, color: 'green', fontWeight: 'bold'}}>
                  ₦ 7,900.00
                </Text>
                <Text style={{fontSize: 10, fontWeight: 'bold'}}>INFLOW</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  ₦ 7,900.00
                </Text>
                <Text style={{fontSize: 10, fontWeight: 'bold'}}>BALANCE</Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 16, color: 'red', fontWeight: 'bold'}}>
                  ₦ 7,900.00
                </Text>
                <Text style={{fontSize: 10, fontWeight: 'bold'}}>OUTFLOW</Text>
              </View>
            </View>
            <ScrollView>
              <FlatList
                data={this.state.FlatListItems}
                //data defined in constructor
                ItemSeparatorComponent={this.FlatListItemSeparator}
                //Item Separator View
                renderItem={({item}) => (
                  // Single Comes here which will be repeatative for the FlatListItems
                  <View stlyle={{flex: 1, padding: 4}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        padding: 4,
                        alignItems: 'center',
                      }}>
                      <View style={{flex: 0.25, alignItems: 'center'}}>
                        <MaterialCommunityIcon
                          name={item.ImagePath}
                          size={38}
                          color="#4a148c"
                        />
                      </View>
                      <View style={{flex: 0.75}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                          }}>
                          <View>
                            <Text
                              style={{
                                color: '#4a148c',
                                fontSize: 16,
                                fontWeight: 'bold',
                              }}>
                              {item.Category}
                            </Text>
                            <Text style={{color: '#4a148c'}}>
                              {item.Percentage}
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={{
                                color: '#4a148c',
                                fontSize: 16,
                                fontWeight: 'bold',
                              }}>
                              ₦ {item.Amount}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#4a148c',
  },
  topView: {
    flex: 0.25,
    //flexDirection: 'row',
    backgroundColor: '#4a148c',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
  },
});
