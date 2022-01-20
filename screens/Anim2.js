import React,{Component} from 'react'
import {Text,View,Image,StyleSheet,Dimensions,Animated, TouchableOpacity} from 'react-native';

const {width,height} = Dimensions.get('screen');

export default class Anim2 extends Component {

    state = {
        ballAnimation: new Animated.Value(200),
    };

    animateBall = () => {
        Animated.timing(this.state.ballAnimation,{
            toValue: 100,
            duration:1500,
            useNativeDriver:false,
        }).start() 
    };

    render() {

        const ballAnimation = {
              width: this.state.ballAnimation,
              height:this.state.ballAnimation,
              borderRadius:this.state.ballAnimation
        };

      //const imageAnimation = {width}

        return (
            <View style={styles.container}>
              <TouchableOpacity onPress={() => this.animateBall()}>
                <Animated.View style={[styles.box,ballAnimation]}>
                <Image style={{alignSelf:'center',marginVertical:80}} 
            source={require('../images/orizonsmall.png')}/>
                </Animated.View>
              </TouchableOpacity>
            </View>
            //<View style={styles.container}>
            //<TouchableOpacity onPress={() => this.animateBall()}>
            //<Image style={{alignSelf:'center',marginVertical:80}} 
            //source={require('../images/orizonbig.png')}/>
            //</TouchableOpacity></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignSelf:'center',
        bottom:550
    },
    box: {
        backgroundColor:'rgba(81,135,200,0.7)',
        width:width/2,
        height:height/4.4,

    },
});


