import * as React from 'react';
import { View, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView, ScrollView, TouchableWithoutFeedback, FlatList, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Nexthings from './Nexthings';
import Besthings from './Besthings';
import Offers from './Offers';

const Screen19 = ({navigation}) => {
  //const navigation = useNavigation();

  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <>
      <SafeAreaView >
          <StatusBar backgroundColor='black' barStyle='light-content'/>
        <View>
          <View style={{backgroundColor:'#000000'}}>
            <Image style={styles.direct} source={require('../images/back.png')}/>
            <Text style={{color:'white',textTransform:'none',fontWeight:'500',fontSize:20,position:'absolute',alignSelf:'center',margin:20,paddingEnd:10,bottom:-5}}
            onPress={() => navigation.navigate('Screen20')}>FAQ's</Text>
            <Separator/>
            </View>
          
            <View style={{backgroundColor:'#000000'}}>
            <View style={styles.boundary}>
              <Separator/>
              <Separator/>
            <View style={{ backgroundColor: '#ffffff'}}>
                        
            <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 0, height: 50, borderRadius: 10, margin: 5, marginVertical: 10, marginHorizontal: 40,borderColor:'black',backgroundColor:'#f1f1f1', }}>
              <Image style={{ padding: 15, margin: 5, height: 25, width: 25, resizeMode: 'stretch', alignItems: 'center', left:5 }} source={require('../images/search.png')} />
              <View style={{  height: 40, margin: 5, marginVertical: 10, marginHorizontal: 5,borderColor:'black',}}>
              <TextInput placeholder='Search' maxLength={50}/>
              </View>
            </View>
            </View>
          <View style={{ backgroundColor: '#ffffff' }}> 
         
        <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 15,alignSelf:'flex-start',left:15 }}>Morbi mauris nibh enim vestibulum</Text>
        <Image style={{alignSelf:'center',left:140,top:28,}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 20,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 170,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 200,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 35,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 270,height:30,width:30,top:35 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:35 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:35 , left:10}}></Image>
      </View>

      <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 50,alignSelf:'flex-start',left:15 }}>Nunc consectetur porttitor dignissim eget</Text>
        <Image style={{alignSelf:'center',left:140,top:62,}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 20,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 170,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 200,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 270,height:30,width:30,top:70 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:70 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:70 , left:10}}></Image>
      </View>

      <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 85,alignSelf:'flex-start',left:15 }}>Urna, consectetur hendrerit tincidunt nunc</Text>
        <Image style={{alignSelf:'center',left:140,top:98,}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 20,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 105,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 1105,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 200,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 105,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 2105,height:30,width:30,top:105 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:105 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:105 , left:10}}></Image>
      </View>

      <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 120,alignSelf:'flex-start',left:15 }}>Eget in morbi tellus commodo</Text>
        <Image style={{alignSelf:'center',left:140,top:132,}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 20,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 1140,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 200,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 2140,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:140 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:140 , left:10}}></Image>
      </View>

      <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 155,alignSelf:'flex-start',left:15 }}>Purus sodales hac neque nunc</Text>
        <Image style={{alignSelf:'center',left:140,top:166,}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 20,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 175,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 175,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 1175,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 200,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 175,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 2175,height:30,width:30,top:175 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:175 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:175 , left:10}}></Image>
      </View>

      <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 190,alignSelf:'flex-start',left:15 }}>Vel, sed volutpat, nec varius</Text>
        <Image style={{alignSelf:'center',left:140,top:200,}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 20,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 210,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 210,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 1210,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 200,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 210,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 2210,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:210 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:210 , left:10}}></Image>
      </View>

      <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 225,alignSelf:'flex-start',left:15 }}>Proin posuere ligula aliquet arcu</Text>
        <Image style={{alignSelf:'center',left:140,top:236,}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 20,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 245,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 245,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 1245,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 200,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 245,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 2245,height:30,width:30,top:245 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:245 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:245 , left:10}}></Image>
      </View>

      <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 260,alignSelf:'flex-start',left:15 }}>Vitae volutpar eros, diam nisi</Text>
        <Image style={{alignSelf:'center',left:140,top:271,}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 20,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 1280,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 200,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 2280,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:280 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:280 , left:10}}></Image>
      </View>

          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>

            </View>
            </View>
          </View>
          </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  direct: {
    alignSelf: 'flex-start',
    marginStart:10,
       height:30,
       width:30,
       left:20,
       bottom:-5
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "darkorange",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 20,
    position:'relative'
  },
  boundary:{
    borderWidth:1,
    borderColor:'#000',
    backgroundColor:'#ffffff',
    borderRadius:45,
  },
  appButtonText:{
    fontSize:18,
    color:"white",
    fontWeight:"bold",
    alignSelf:"center",
    textTransform:'capitalize'   
},
appButtonContainer:{
  backgroundColor:"darkorange",
  borderRadius:15,
  paddingVertical:10,
  paddingHorizontal:22,
  alignItems:'center',
  margin: 270,
  position:'absolute',
},
});

export default Screen19;
