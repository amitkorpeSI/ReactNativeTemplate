import EStyleSheet from 'react-native-extended-stylesheet';
// import {StyleSheet} from 'react-native';

import COLORS from 'ReactNativeTemplate/themes/colors';
export default EStyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
    mainContainer:{
        flex: 1,
        // backgroundColor: backgroundColor,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle:{
        fontSize:22,
        fontWeight:'bold',
        color:'white',
        // '@media (min-height:812)':{            
        //     fontSize:30,
        //     color:'red'    
        // }
    },
    // '@media (min-height:812)':{
    //     textStyle:{
    //         fontSize:30,
    //         color:'red'
    //     }
    // }

})