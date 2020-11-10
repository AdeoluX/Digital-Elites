import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import Pie from 'react-native-pie';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

export default class Analytics extends Component {
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
        {
          id: '4',
          Category: 'Health',
          Percentage: '33.3%',
          Amount: '8,000',
          ImagePath: 'heart-pulse',
        },
        {
          id: '5',
          Category: 'Shopping',
          Percentage: '33.3%',
          Amount: '8,000',
          ImagePath: 'cart-outline',
        },
        {
          id: '6',
          Category: 'Airtime',
          Percentage: '33.3%',
          Amount: '8,000',
          ImagePath: 'cellphone-iphone',
        },
        {
          id: '7',
          Category: 'Health',
          Percentage: '33.3%',
          Amount: '8,000',
          ImagePath: 'heart-pulse',
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
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems: 'center', padding: '4.5%'}}>
            <View style={styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: '4%',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                    History
                  </Text>
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
                  <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                    BALANCE
                  </Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={{fontSize: 16, color: 'red', fontWeight: 'bold'}}>
                    ₦ 7,900.00
                  </Text>
                  <Text style={{fontSize: 10, fontWeight: 'bold'}}>
                    OUTFLOW
                  </Text>
                </View>
              </View>
              <View style={{paddingTop: '4%'}}>
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
              </View>
              <View style={{padding: '10%', alignItems: 'center'}}>
                {/* <Image
                  source={require('../../Images/gtb.png')}
                  style={{height: 100, width: 100}}
                /> */}
                <Pie
                  radius={80}
                  innerRadius={35}
                  sections={[
                    {
                      percentage: 20,
                      color: '#C70039',
                    },
                    {
                      percentage: 10,
                      color: '#44CD40',
                    },
                    {
                      percentage: 30,
                      color: '#404FCD',
                    },
                    {
                      percentage: 40,
                      color: '#EBD22F',
                    },
                  ]}
                  dividerSize={6}
                  strokeCap={'round'}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4a148c',
  },
  card: {
    // height: 1.85 * windowHeight,
    width: 0.93 * windowWidth,
    //padding: '10%',
    backgroundColor: '#fff',
    borderRadius: 20,
  },
});
