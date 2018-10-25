/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, {Component} from 'react';
import Router from './routes';

AppRegistry.registerComponent(appName, () => App);

export default class CustomDrawer extends Component {
  render () {
    return (
      <Router/>
    );
  }
}

AppRegistry.registerComponent('CustomDrawer', () => CustomDrawer);