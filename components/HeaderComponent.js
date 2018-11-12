import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import Button from 'react-native-button';
// import HomeComponents from './HomeComponent';

export default class HomeComponents extends Component{
    render(){
        return(
            <View style={{
                height:80,
                width:'100%',
                alignItems:'center',
                justifyContent:'flex-start',
                flexDirection:'row'
            }}>
                <TouchableHighlight style={{marginLeft:15,marginTop:20}}
                    onPress = {() => {
                        const { navigate } = this.props.navigation;
                        {/* navigate('DrawerOpen'); */}
                        {/* navigate.toggleDrawer(); */}
                        this.props.navigation.toggleDrawer();
                    }}>
                    <Image
                     style={{
                         width:30,height:30
                    }}
                    source={require('../assets/images/MenuIcon/menu.png')}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}