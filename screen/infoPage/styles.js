import EStyleSheet from 'react-native-extended-stylesheet';
// import {StyleSheet} from 'react-native';

import COLORS from 'ReactNativeTemplate/themes/colors';
export default EStyleSheet.create({
    innerContainer:{
        flex:1,
    },
    backgroundImage:{
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%'
    },
    overlay:{
        position:'absolute',
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.5)',
        left:0,
        top:0
    },
    playerList:{
        flex:1,
        padding:20
    },
    title:{
        fontSize:25,
        color:'white',
        marginBottom:15,
    },
    plyName:{
        fontSize:18,
        color:'white',
        marginVertical:10
    }

})