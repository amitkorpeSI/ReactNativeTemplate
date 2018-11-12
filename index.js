/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import React, {Component} from 'react';

// AppRegistry.registerComponent(appName, () => App);

// export default class CustomDrawer extends Component {
//   render () {
//     return (
//       <Router/>
//     );
//   }
// }

// AppRegistry.registerComponent('CustomDrawer', () => CustomDrawer);

import {AppRegistry, Dimensions} from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build({});
import HomeComponent from './screen/HomePage';
import InfoComponent from './screen/infoPage';
import SvgPage from './screen/SvgPage';
//screen names
import {Home, Info, Settings, Cloud, SvgScreen} from './screenNames';
var {width, height} = Dimensions.get('window');

let routeConfig={
  Home: {
    path : '/',
    screen : HomeComponent
  },
  Info: {
    path : '/info',
    screen : InfoComponent
  },
  SvgScreen: {
    path : '/SvgScreen',
    screen : SvgPage
  }
};
let DrawerNavigatorConfig={
  initialRouteName: Home,
  drawerWidth: width / 2,
  drawerPosition: 'left',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggle: 'DrawerToggle',
  contentOptions:{
    activeTintColor: 'red'
  }
};

const App = createDrawerNavigator(routeConfig, DrawerNavigatorConfig);
AppRegistry.registerComponent('ReactNativeTemplate', () => App);