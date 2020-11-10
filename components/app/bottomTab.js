import React from 'react';
import {Provider} from '../contextAPI/MyContext';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAppContainer} from 'react-navigation';
import Home from './Home';
import Discount from './Discounts';
import Analytics from './Analytics';
import Profile from './Profile';

const Tab = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcon
            name="home"
            size={27}
            style={[{color: tintColor}]}
          />
        ),
        activeColor: '#4a148c',
        inactiveColor: '#a4a4a4aa',
      },
    },
    Analytics: {
      screen: Analytics,
      navigationOptions: {
        tabBarLabel: 'Analytics',
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcon
            name="chart-pie"
            size={27}
            style={[{color: tintColor}]}
          />
        ),
        activeColor: '#4a148c',
        inactiveColor: '#a4a4a4aa',
      },
    },
    Discount: {
      screen: Discount,
      navigationOptions: {
        tabBarLabel: 'Discount',
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcon
            name="gift"
            size={27}
            style={[{color: tintColor}]}
          />
        ),
        activeColor: '#4a148c',
        inactiveColor: '#a4a4a4aa',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <MaterialCommunityIcons
            name="md-person"
            size={26}
            style={[{color: tintColor}]}
          />
        ),
        activeColor: '#4a148c',
        inactiveColor: '#a4a4a4aa',
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#4a148c',
    inactiveColor: '#a4a4a4aa',
    barStyle: {backgroundColor: '#fff'},
  },
);

const HomeContainer = createAppContainer(Tab);

const App = () => {
  const state = {
    name: 'Tania',
    loggedIn: true,
  };
  return (
    <Provider value={state}>
      <HomeContainer />
    </Provider>
  );
};

export default App;
