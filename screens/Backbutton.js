import React from 'react';
import {BackHandler,View,Text} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const Backbutton = () => {

    useFocusEffect(
        React.useCallback(() => {
            const onBackPress = () => {
               //alert('Back Press handled and doing no action');
               'hardwareBackPress',
                onBackPress
            };
            BackHandler.addEventListener(
                'hardwareBackPress',
                onBackPress
            );
        },[]),
    );

return ( <View>
    <Text> hello </Text>
         </View> );
};

export default Backbutton;
