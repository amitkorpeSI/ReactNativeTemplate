import React, {Component} from 'react';
import {View} from 'react-native';
import {SvgScreen} from 'ReactNativeTemplate/screenNames';
import HeaderComponent from 'ReactNativeTemplate/components/HeaderComponent';
// import styles from './styles';
import Svg,{
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
    Filter,
    feGaussianBlur
} from 'react-native-svg';
class SvgPage extends Component{
    render(){
        return(
        <View style={{flex:1,backgroundColor:'#f2f2f2',alignItems:'center'}}>
            <HeaderComponent {...this.props}/>



            <View  style={{flex:1,backgroundColor:'#f2f2f2',alignItems:'center', justifyContent:'center'}}>
                <Svg width="140" height="140" >
            
                    <Defs>
                        <RadialGradient id="shadow_3" fill="#fff" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        
                        </RadialGradient>
                    </Defs>
                    
                    <Defs>
                        <RadialGradient id="green" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <Stop offset="15%"
                            stopColor="rgb(66,147,33)"
                            stopOpacity="1"
                        />
                        <Stop offset="100%"
                            stopColor="rgb(180,236,81)"
                            stopOpacity="1"
                        />
                        </RadialGradient>
                    </Defs>
        
                    <Defs>
                        <RadialGradient id="gray" cx="50%" cy="50%" r="100%" fx="50%" fy="50%">
                        <Stop offset="0%"
                            stopColor="rgb(200,200,200)"
                            stopOpacity="1"
                        />
                        <Stop offset="100%" 
                            stopColor="rgb(255,255,255)"
                            stopOpacity="1"
                        />
                        </RadialGradient>
                    </Defs>


                    {/* <Defs>
                        <Filter id="blur">
                            <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                        </Filter>
                    </Defs> */}

                    <Circle cx="70" cy="70" r="60" fill="#785FF0" filter="url(#blur)" />
                    <Circle cx="70" cy="70" r="60" fill="white"  />
                    <Circle cx="70" cy="70" r="56" fill="url(#green)"/>

                    <Path id="" fill="#785FF0" d="M70,70 L70,10 A60,60 0 0,1 129.688856,76.034701" /> 
                    <Path fill="url(#gray)" d="M70,70 L70,15 A55,55 0 0,1 124.698856,75.474701" stroke="transparent" stroke-width="5"/>   
                    <Rect x="69" y="10" width="4" height="60" fill="#fff" fill-opacity="1"></Rect>
                    <Rect x="69" y="10" width="4" height="61" fill="#fff" fill-opacity="1" transform="rotate(95 70 70)"></Rect>
                
                </Svg>
            </View>
        </View>
        )
    }
}

export default SvgPage;

