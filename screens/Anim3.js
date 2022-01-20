import React,{Component,useState} from 'react'; 
import {Animated,View,TouchableOpacity,Easing,Text,Modal} from 'react-native';

const bgImage = require('../images/orizonbig.png')

class Anim3 extends Component {

    constructor(props) {
        super(props)
        this.animatedValue = new Animated.Value(0)
    }

    handleAnimation = () => {
        Animated.timing(this.animatedValue,{
            toValue:1,
            duration:1000,
            easing:Easing.ease,
            useNativeDriver:true
        }).start()
    }

    render() {
        return (
            <View style={{flexDirection: 'row',justifyContent: 'space-around',}}>            
            <TouchableOpacity style={{elevation:8,backgroundColor:"#f2994a",top:580,right:10,borderRadius:15,paddingVertical:-3,paddingHorizontal:12,margin: 25,width:140,height:60}} 
              onPress={this.handleAnimation} >
              <Text style={{fontSize:18,color:"white",fontWeight:"bold",alignSelf:"center",textTransform:"capitalize",margin:15,marginHorizontal:20,}}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{elevation:8,backgroundColor:"#808080",top:580,left:10,borderRadius:15,paddingVertical:-3,paddingHorizontal:12,margin: 25,width:140,height:60}} 
              onPress={this.handleAnimation} >
              <Text style={{fontSize:18,color:"white",fontWeight:"bold",alignSelf:"center",textTransform:"capitalize",margin:15,marginHorizontal:20,}}>Sign Up</Text>
            </TouchableOpacity>
                <Animated.Image source={bgImage} resizeMode='center' style={{position:'absolute',left:170,top:300,height:20,width:16,
                      
                      transform:[
                          {
                              translateX:this.animatedValue.interpolate({
                                  inputRange:[0,1],
                                  outputRange:[0,5]
                              })
                          },
                          {
                            translateY:this.animatedValue.interpolate({
                                inputRange:[0,1],
                                outputRange:[0,-240]
                            })
                        },
                        {
                            scaleX:this.animatedValue.interpolate({
                                inputRange:[0,1],
                                outputRange:[20,10]
                            })
                        },
                        {
                            scaleY:this.animatedValue.interpolate({
                                inputRange:[0,1],
                                outputRange:[20,10]
                            })
                        },
                      ]
                  }}
                />
            </View>
        )
    }
}

export default Anim3;

