import React, {Component} from 'react';
import {View, Text, Image, TouchableHighlight, ScrollView} from 'react-native';
import {Info} from 'ReactNativeTemplate/screenNames';
import HeaderComponent from 'ReactNativeTemplate/components/HeaderComponent';
import styles from './styles';
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

                <View style={styles.innerContainer}>
                    <Image                     
                        source={require('../../assets/images/background/pitch1.jpg')}
                        //source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                        resizeMode="cover"  //stretch,contain,cover
                        style={styles.backgroundImage}
                    />
                    <View style={styles.overlay} />
                    <ScrollView style={styles.playerList}>   
                        <Text style={styles.title}>Player Name</Text>                     
                        <Text style={styles.plyName}>Xavi</Text>  
                        <Text style={styles.plyName}>Andrés Iniesta</Text>  
                        <Text style={styles.plyName}>Zlatan Ibrahimović</Text>
                        <Text style={styles.plyName}>Lionel Messi</Text>
                        <Text style={styles.plyName}>Radamel Falcao</Text>                    
                        <Text style={styles.plyName}>Robin van Persie</Text>
                        <Text style={styles.plyName}>Andrea Pirlo</Text>                        
                    </ScrollView>
                </View>
                {/* <View style={{
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
                </View> */}
            </View>
        );
    }
}  