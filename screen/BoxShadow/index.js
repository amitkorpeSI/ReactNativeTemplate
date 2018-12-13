
import React, {Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    TouchableHighlight
} from 'react-native'
import HeaderComponent from 'ReactNativeTemplate/components/HeaderComponent';
import {BoxShadow} from 'react-native-shadow'
 
export default class VideoCell extends Component {
    render = () => {
        const shadowOpt = {
            width:160,
            height:100,
            color:"#000",
            border:10,
            radius:10,
            opacity:0.1,
            x:0,
            y:0,
            style:{marginVertical:50,marginHorizontal:40,borderRadius:80}
        }
 
        const shadowOpt1 = {
            width:150,
            height:150,
            color:"#000",
            border:30,
            radius:75,
            opacity:0.2,
            x:0,
            y:0,
            style:{marginVertical:0,marginHorizontal:40,}
        }
        return (
            <View>
                <HeaderComponent {...this.props}/>
            <BoxShadow setting={shadowOpt}>
                {/* <TouchableHighlight style={{
                    position:"relative",
                    width:160,
                    height:100,
                    backgroundColor: "#fff",
                    borderRadius:10,
                    alignItems:'center',
                    justifyContent:'center',
                    overflow:"hidden"}}>
                    <Text style={{fontSize:18,color:'black'}}>Navigate to info</Text>
                </TouchableHighlight> */}
            </BoxShadow>

            <BoxShadow setting={shadowOpt1}>
                {/* <TouchableHighlight style={{
                    position:"relative",
                    width:100,
                    height:100,
                    backgroundColor: "#fff",
                    borderRadius:50,
                    alignItems:'center',
                    justifyContent:'center',
                    overflow:"hidden"}}>
                    <Text style={{fontSize:12,color:'black'}}>Button</Text>
                </TouchableHighlight> */}
                </BoxShadow>
            </View>
        )
    }
}