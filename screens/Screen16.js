import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity,SafeAreaView,StatusBar,ScrollView,Image} from 'react-native';

const Screen16 = ({navigation}) => {

    const Separator = () => (
        <View style={styles.separator} />
      );

    return (
        <>
        <SafeAreaView >
          <ScrollView>
        <Separator/>
        <Separator/>

        <StatusBar backgroundColor='#f0f0f0' barStyle='dark-content'/>
         
         <View>
        <Image style={{alignSelf:'center',height:100,width:100,top:20}} source={require('../images/profilepic.png')}/>
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 20, fontWeight: '800', position: 'absolute', margin: 10, top: 120,alignSelf:'center' }}>Alfred Alex</Text>
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 18, fontWeight: '500', position: 'absolute', margin: 10, top: 145,alignSelf:'center', }}>alfred@gmail.com</Text>

         <View style={styles.fixToText}>
            <TouchableOpacity style={{
            backgroundColor:"rgba(222, 238, 255, 1)",
            borderRadius:15,
            paddingVertical:25,
            paddingHorizontal:12,
            margin: 20,
            width:180,
            left:20,
            top:10,
            marginTop:-185,
            marginBottom:485,
            borderColor:'rgba(0, 122, 255, 1)',
            borderWidth:2,
            paddingBottom:7}} 
            onPress={() => navigation.navigate('Screen17')}>
        <Text style={{textTransform: 'capitalize', fontSize: 15,color: 'rgba(0, 122, 255, 1)',top:5,position: 'absolute',alignSelf:'center',fontWeight: 'bold'}}>Edit Profile</Text>  
        </TouchableOpacity>
        </View>
        </View>

      <View>
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 150,alignSelf:'flex-start',left:10 }}>Profile</Text>
        <Image style={{alignSelf:'center',left:-140,top:196,}} source={require('../images/bikeicon.png')}/>      
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 185,alignSelf:'flex-start',left:55 }}>My Bikes</Text>
        <Image style={{alignSelf:'center',left:140,top:180,}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 25,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 170,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 200,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 210,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 270,height:30,width:30,top:210 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:210 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:210,left:15 }}></Image>
      </View>

      <View>
        <Image style={{alignSelf:'center',height:25,width:25,left:-140,top:218}} source={require('../images/history.png')}/>      
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 210,alignSelf:'flex-start',left:55 }}>Active Loans</Text>
        <Image style={{alignSelf:'center',left:140,top:200}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 30,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 170,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 200,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 235,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 270,height:30,width:30,top:235 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:235 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:235,left:15 }}></Image>
      </View>

      <View>
        <Image style={{alignSelf:'center',height:27,width:30,left:-140,top:233}} source={require('../images/help.png')}/>      
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 225,alignSelf:'flex-start',left:55 }}>Help Center</Text>
        <Image style={{alignSelf:'center',left:140,top:215}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 30,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 170,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 210,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 270,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:250 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:250 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 300,height:30,width:30,top:250,left:5 }}></Image>
      </View>

      <View>
        <Image style={{alignSelf:'center',height:25,width:32,left:-140,top:245}} source={require('../images/share.png')}/>      
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 237,alignSelf:'flex-start',left:55 }}>Share & Earn</Text>
        <Image style={{alignSelf:'center',left:140,top:230}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 30,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 170,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 210,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 265,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 270,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:265 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:265 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 300,height:30,width:30,top:265,left:5 }}></Image>
      </View>

      <View>
        <Image style={{alignSelf:'center',height:30,width:30,left:-140,top:260}} source={require('../images/rating.png')}/>      
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 255,alignSelf:'flex-start',left:55 }}>Rate us</Text>
        <Image style={{alignSelf:'center',left:140,top:231}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 30,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 170,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 210,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 270,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:280 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:280 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 300,height:30,width:30,top:280,left:5 }}></Image>
      </View>

      <View>
        <Image style={{alignSelf:'center',height:30,width:32,left:-140,top:275}} source={require('../images/faq.png')}/>      
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 267,alignSelf:'flex-start',left:55 }}>FAQ's</Text>
        <Image style={{alignSelf:'center',left:140,top:250}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 30,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 170,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 210,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 270,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:295 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:295 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 300,height:30,width:30,top:295,left:5 }}></Image>
      </View>

      <View>
        <Image style={{alignSelf:'center',height:29,width:30,left:-140,top:290}} source={require('../images/info.png')}/>      
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 285,alignSelf:'flex-start',left:55 }}>User Information</Text>
        <Image style={{alignSelf:'center',left:140,top:268}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 30,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 170,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 210,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 310,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 270,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:310 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:310 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 300,height:30,width:30,top:310,left:5 }}></Image>
      </View>

      <View>
        <Image style={{alignSelf:'center',height:29,width:30,left:-140,top:305}} source={require('../images/exit.png')}/>      
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 300,alignSelf:'flex-start',left:55 }}>Logout</Text>
        <Image style={{alignSelf:'center',left:140,top:283}} source={require('../images/forward2.png')}/>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 30,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 170,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 210,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 270,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:325 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:325 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 300,height:30,width:30,top:325,left:5 }}></Image>
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
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        </ScrollView>
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    fixToText: {
      justifyContent:'center',
      alignSelf:'stretch'
    },
    direct: {
       alignSelf:'center',
       height:30,
       width:30,
       left:140,
       top:176
    },
    separator: {
        marginVertical: 8,
        borderBottomColor:'transparent',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      appButtonText:{
        fontSize:18,
        color:"pink",
        fontWeight:"bold",
        alignSelf:"center",
        textTransform:'capitalize',
        
      },
    appButtonContainer:{
      //elevation:8,
      backgroundColor:"#fff",
      borderRadius:15,
      paddingVertical:30,
      paddingHorizontal:12,
      margin: 20,
      width:290,
      left:-35,
      top:30,
      marginTop:40,
      marginBottom:60,
  },
  boundary:{
    borderWidth:1,
    borderColor:'pink',
    backgroundColor:'#ffffff',
    borderRadius:50,
  },
  fixToText: {
    justifyContent:'center',
    alignSelf:'flex-end',
    position:'absolute',
    bottom:40,
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:12,
    top:50,
    //elevation:8,
    left:40,
    height:140,
    width:430,
    right:170,
    padding:50,   
    marginTop:420
  },
});

export default Screen16;
