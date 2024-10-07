import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import App from './app/App';
import RootLayout from './app/index';

AppRegistry.registerComponent(appName, () => RootLayout);
