import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, TextInput} from 'react-native';
import {Info} from 'ReactNativeTemplate/screenNames';
import HeaderComponent from 'ReactNativeTemplate/components/HeaderComponent';
import styles from './styles';

//const backgroundColor = '#0067a7';
export default class HomeComponents extends Component{
    static navigationOption = ({ navigation }) => {
        let drawerLabel = "Home";
        return{drawerLabel};
    } 

    render(){
        return( 
            <View style={styles.container}>           
                <HeaderComponent {...this.props}/>
                <Text style={styles.heading}>REACT NATIVE</Text>
                <Text style={styles.primary}>MY FIRST APP</Text>
            </View>
        );
    }
}  