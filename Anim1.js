import React from 'react';
import { Text, View,Animated,TouchableOpacity } from 'react-native';

const App = () => {
  return ( 
    <View>
      <Animated.View>
        <View style={{
          width:100,
          height:100,
          borderRadius:100/2,
          backgroundColor:'blue'
        }}/>
      </Animated.View>
    </View>
  );
};

export default App;
