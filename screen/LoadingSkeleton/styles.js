import EStyleSheet from 'react-native-extended-stylesheet';
// import {StyleSheet} from 'react-native';

import COLORS from 'ReactNativeTemplate/themes/colors';
export default EStyleSheet.create({
    container:{
        flex:1,
    },
    loadingScreen:{
        flex:1,
        backgroundColor:'#ddd',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },

})