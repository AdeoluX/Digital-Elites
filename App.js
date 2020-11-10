import React, {useState} from 'react';
import Splash from './components/splash/splash';
import walkThrough from './components/walkthrough/walkthrough';
import Login from './components/authentication/login';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

function App() {
  const [count, setCount] = useState(0);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
            title: 'Splash',
          }}
        />
        <Stack.Screen
          name="Walk"
          component={walkThrough}
          options={{
            headerShown: false,
            title: 'WalkThrough',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            title: 'Logim',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
