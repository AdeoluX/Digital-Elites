/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import AppStack from './AppStack';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppStack);
