import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
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
                <View style={styles.mainContainer}>
                    <Text style={styles.textStyle} >This is home screen</Text>
                    <TouchableHighlight style={{
                        margin:20,
                        width:200,
                        height:50,
                        backgroundColor:'darkviolet',
                        padding: 10,
                        alignItems: 'center'
                    }}
                    onPress = {() => {
                        const { navigate } = this.props.navigation;
                        navigate("Info");
                    }}
                    >
                    <Text style={{fontSize:18,color:'white'}}>Navigate to info</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}  