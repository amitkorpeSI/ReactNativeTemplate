import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import {Info} from 'ReactNativeTemplate/screenNames';
import HeaderComponent from 'ReactNativeTemplate/components/HeaderComponent';
const backgroundColor = '#e510be';
export default class InfoComponents extends Component{
    static navigationOption = ({ navigation }) => {
        let drawerLabel = "Home";
        return{drawerLabel};
    } 

    render(){
        return( 
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <HeaderComponent {...this.props}/>
                <View style={{
                    flex: 1,
                    backgroundColor: backgroundColor,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{fontSize:22,fontWeight:'bold',color:'white'}}>This is info screen</Text>
                    <TouchableHighlight style={{
                        margin:20,
                        width:200,
                        height:50,
                        backgroundColor:'#0067a7',
                        padding: 10,
                        alignItems: 'center'
                    }}
                    onPress = {() => {
                        const { navigate } = this.props.navigation;
                        navigate("Home");
                    }}
                    >
                    <Text style={{fontSize:18,color:'white'}}>Navigate to home</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}  