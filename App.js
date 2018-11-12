/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import styles from "./styles.scss";
import dreamCardImageHor from './assets/images/DreamCard/Horizontal.jpg';
import dreamCardImadreamCardImageVergeHor from './assets/images/DreamCard/Horizontal.jpg';
import dreamCardImageVer from './assets/images/DreamCard/Veritical.jpg';
import Image from 'react-native-scalable-image';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      // <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles["my-dashed-class"]}>Hello Amit</Text>
        <Text className={styles.myClass}>I'm a CSS developer</Text>
        <View style={styles.linearGradientBox}></View>
        {/* <View style={{ marginBottom:15 }}>
          <Image width={Dimensions.get('window').width} resizeMode="contain" style={styles.dreamCardImgStyleHor} source={dreamCardImageHor} />
      
        </View>
        <View style={{ marginBottom:15  }}>
          <Image width={Dimensions.get('window').width} resizeMode="contain" style={styles.dreamCardImgStyleVer} source={dreamCardImageVer} />
        </View> */}
      </View>
      // </ScrollView>
    );
  }
}
