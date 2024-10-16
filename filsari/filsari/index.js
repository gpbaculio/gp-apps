/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

import Root from 'src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
