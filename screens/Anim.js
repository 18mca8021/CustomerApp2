import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';

const Anim = () => {
  Animated.Value(5)

  function moveBall() {
    Animated.timing(leftValue, {
      toValue:100,
      duration:1000,
      useNativeDriver:false
    }).start()
  }

  return (
    <View style={{flex:1}}>
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <View style={{width:100,height:100,marginLeft:leftValue,borderRadius:100/2,backgroundColor:'red'}}></View>
    </View>
    <TouchableOpacity onPress={moveBall}>
      <Text>Click me to move ball!!</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Anim;