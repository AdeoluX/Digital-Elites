import React, {useState} from 'react';
import Splash from './components/splash/splash';
import BottomTab from './components/app/bottomTab';
import walkThrough from './components/walkthrough/walkthrough';
import Login from './components/authentication/login';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// const Stack = createStackNavigator();
const AuthStack = createStackNavigator(
  {
    WalkThrough: {
      screen: walkThrough,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'WalkThrough',
  },
);
// const SplashStack = createStackNavigator(
//     {
//      Splash: Splash
//     },
//     {
//       initialRouteName: 'Splash',
//     },
//   );
const AppStack = createStackNavigator(
  {
    BottomTab: {
      screen: BottomTab,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'BottomTab',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AppLoading: Splash,
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    },
  ),
);
