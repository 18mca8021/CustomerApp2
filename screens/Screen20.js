import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput,TouchableOpacity,SafeAreaView,ScrollView,Modal} from 'react-native';
import Date from './Date';
import {useState} from 'react';
import { StylesContext } from '@material-ui/styles';

const Screen20 = ({navigation}) => {


    const Separator = () => (
      
        <View style={styles.separator} />
      );

    return (
        <>
        <SafeAreaView >
        <View>
          <View style={{backgroundColor:'#000000'}}>
            <Image style={styles.direct} source={require('../images/back.png')} onPress={() => navigation.navigate('Screen4')}/>
            <Text style={{color:'white',textTransform:'capitalize',fontWeight:'bold',fontSize:20,position:'absolute',alignSelf:'center',margin:20,paddingEnd:10,top:-13}}
            onPress={() => navigation.navigate('Screen10')}> #13542 </Text>
            <Separator/>
            </View>
            <View style={{backgroundColor:'#000000'}}>
            <SafeAreaView  style={styles.boundary}>
              <Separator/>
              <Separator/>
        <View style={{backgroundColor:'#ffffff'}}>
          <View>
          <Text style={{ color: 'black', textTransform: 'capitalize', fontSize: 18, fontWeight: '600', position: 'absolute', margin: 10, paddingStart: 25, top: -20 }}>Chain Lubrication</Text>
          <Text style={{ color: 'grey', textTransform: 'none', fontSize: 13, fontWeight: '500', position: 'absolute', margin: 10, paddingStart: 27, top: 10 }}>RE classic 350</Text>
          <Text style={{ color: '#F2994A', textTransform: 'none', fontSize: 13, fontWeight: 'normal', position: 'absolute', margin: 10, paddingStart: 27, top: 30 }}>Cleande and lubricated</Text>
          <Text style={{ color: 'black', textTransform: 'capitalize', fontSize: 18, fontWeight: '800', position: 'absolute', margin: 10, paddingStart: 270, top: 5 }}>$ 39</Text>
          
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 20,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 170,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 200,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 45,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 270,height:30,width:30,top:45 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:45 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:45 , left:10}}></Image>
          
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 20,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 50,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 60,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 70,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 80,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 90,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 100,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 110,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 120,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 130,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 150,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 160,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 170,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 180,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 200,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 140,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 220,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 230,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 240,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 250,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 260,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 270,height:30,width:30,top:140 }}></Image>
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 280,height:30,width:30,top:140 }}></Image>  
          <Image source={require('../images/line3.png')} style={{ position: 'absolute', margin: 10, marginStart: 290,height:30,width:30,top:140 , left:10}}></Image>

          <Text style={{ color: 'black', textTransform: 'capitalize', fontSize: 18, fontWeight: '600', position: 'absolute', margin: 10, paddingStart: 25, top: 70 }}>Disc pad replacement</Text>
          <Text style={{ color: 'grey', textTransform: 'none', fontSize: 13, fontWeight: '500', position: 'absolute', margin: 10, paddingStart: 27, top: 105 }}>RE classic 350</Text>
          <Text style={{ color: '#F2994A', textTransform: 'none', fontSize: 13, fontWeight: 'normal', position: 'absolute', margin: 10, paddingStart: 25, top: 125 }}>Replaced</Text>
          <Text style={{ color: 'black', textTransform: 'capitalize', fontSize: 18, fontWeight: '800', position: 'absolute', margin: 10, paddingStart: 270, top: 100 }}>$ 10</Text>
          
        </View> 

        <Text style={{ color: 'black', textTransform: 'capitalize', fontSize: 20, fontWeight: '800', position: 'absolute', margin: 10, paddingStart: 23, top: 170 }}>Order Summary</Text>
         <Text style={{top:220,alignItems:'flex-start',color:'black',fontSize:17,paddingStart:34}}>Subtotal</Text>
         <Text style={{top:225,alignItems:'flex-start',color:'black',fontSize:17,paddingStart:34}}>Paid Advance</Text>
         <Text style={{top:230,alignItems:'flex-start',color:'black',fontWeight:'bold',fontSize:17,paddingStart:35}}>To Pay</Text>
         <Text style={{top:235,alignItems:'flex-start',color:'black',fontSize:17,paddingStart:35}}>Est. Tax</Text>
         <Text style={{top:240,alignItems:'flex-start',color:'black',fontWeight:'600',fontSize:17,paddingStart:35}}>Total</Text>

         <Text style={{top:105,alignItems:'flex-end',color:'black',fontSize:18,paddingStart:240}}>S$156.00</Text>
         <Text style={{top:107,alignItems:'flex-end',color:'black',fontSize:18,paddingStart:250}}>S$13.00</Text>
         <Text style={{top:109,alignItems:'flex-end',color:'black',fontSize:18,paddingStart:250}}>S$13.00</Text>
         <Text style={{top:111,alignItems:'flex-end',color:'black',fontSize:18,paddingStart:260}}>S$0.00</Text>
         <Text style={{top:113,alignItems:'flex-end',color: '#4DB369',fontWeight: '800',fontSize:18,paddingStart:257}}>S$ 169</Text>

         <Text style={{ color: 'grey', textTransform: 'none', fontSize: 12, fontWeight: '300', position: 'absolute', margin: 10, top: 485,alignSelf:'center' }}>We've sent a copy of this bill to your email id</Text>
         <Text style={{ color: '#f2994a', textTransform: 'lowercase', fontSize: 12, fontWeight: '300', position: 'absolute', margin: 10, top: 498,alignSelf:'center',textDecorationLine:'underline' }}>support@orizonsingapore.com</Text>

         <View style={styles.fixToText}>
            <TouchableOpacity style={{backgroundColor:"#f2994a",borderRadius:15,paddingVertical:30,paddingHorizontal:12,margin: 20,width:290,left:35,top:10,marginTop:-170,marginBottom:180,}} 
         onPress={() => navigation.navigate('Screen21')}>
        <Text style={{textTransform: 'capitalize', fontSize: 18,color: 'white',fontWeight: 'bold',top:17,position: 'absolute',alignSelf:'center'}}>Pay and Complete</Text>  
        </TouchableOpacity>
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
        </SafeAreaView>
        </View>


        </View>
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
       alignSelf:'flex-start',
       height:30,
       width:30,
       left:20,
       top:8
    },
    separator: {
        marginVertical: 8,
        borderBottomColor:'transparent',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      appButtonText:{
        fontSize:18,
        color:"white",
        fontWeight:"bold",
        alignSelf:"center",
        textTransform:'capitalize',
      },
    appButtonContainer:{
      elevation:8,
      backgroundColor:"#f2994a",
      borderRadius:15,
      paddingVertical:30,
      paddingHorizontal:12,
      margin: 20,
      width:190,
      left:150,
      top:10,
      marginTop:40,
      marginBottom:60,
  },
  boundary:{
    borderWidth:1,
    borderColor:'#000',
    backgroundColor:'#ffffff',
    borderRadius:50,
  },
  fixToText: {
    justifyContent:'center',
    alignSelf:'flex-end',
    position:'relative',
    bottom:20,
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:12,
    top:20,
    elevation:8,
    left:40,
    height:120,
    width:430,
    right:170,
    padding:50,   
    marginTop:410
  },
});

export default Screen20;
