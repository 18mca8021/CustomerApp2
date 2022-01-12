import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput,TouchableOpacity,SafeAreaView,ScrollView} from 'react-native';
import Date from './Date';

const Screen11 = ({navigation}) => {

    const Separator = () => (
        <View style={styles.separator} />
      );

    return (
        <>
        <SafeAreaView >
        <View>
          <View style={{backgroundColor:'#000000'}}>
            <Image style={styles.direct} source={require('../images/back.png')} onPress={() => navigation.navigate('Screen9')}/>
            <Text style={{color:'white',textTransform:'capitalize',fontWeight:'bold',fontSize:20,position:'absolute',alignSelf:'center',margin:20,paddingEnd:10,top:-13}}> Payment Method </Text>
            <Separator/>
            </View>
            <View style={{backgroundColor:'#000000'}}>
            <SafeAreaView  style={styles.boundary}>
              <Separator/>
              <Separator/>
        <View style={{backgroundColor:'#ffffff'}}>
          <View>
          <Text style={{ color: 'black', textTransform: 'none', fontSize: 18, fontWeight: '500', position: 'absolute', margin: 10, paddingStart: 95, top: 25 }}>Pay with PayPal</Text>
          <Image style={{alignSelf:'flex-start', margin: 10,height:40,width:40,left:35,top:17}} source={require('../images/paypalogo.png')}/>
          <View style={{height:80,width:295,borderWidth:1,borderColor:'grey',borderRadius:15,margin:3,marginStart:30,bottom:55}}></View>
          <Image style={{alignSelf:'flex-end', margin: 10,height:30,width:30,bottom:125,right:40}} source={require('../images/darkradiobutton.png')}/>

          <Text style={{ color: 'black', textTransform: 'none', fontSize: 18, fontWeight: '500', position: 'absolute', margin: 10, paddingStart: 95, top: 125 }}>Pay with Cash</Text>
          <Image style={{alignSelf:'flex-start', margin: 10,height:40,width:40,left:35,bottom:80}} source={require('../images/cashlogo.png')}/>
          <View style={{height:80,width:295,borderWidth:1,borderColor:'grey',borderRadius:15,margin:3,marginStart:30,bottom:150}}></View>
          <Image style={{alignSelf:'flex-end', margin: 10,height:30,width:30,bottom:220,right:40}} source={require('../images/blankradiobutton.png')}/>

         </View>

         <Text style={{bottom:120,alignItems:'flex-start',color:'grey',fontSize:14,paddingStart:25,fontWeight: '500'}}>Note: This is only an estimated amount and the</Text>
         <Text style={{bottom:120,alignItems:'flex-start',color:'grey',fontSize:14,paddingStart:25,fontWeight: '500'}}>final amount will be updated after motorcycle</Text>
         <Text style={{bottom:120,alignItems:'flex-start',color:'grey',fontSize:14,paddingStart:25,fontWeight: '500'}}>has been diagnosed.</Text>


         <Text style={{ color: 'black', textTransform: 'capitalize', fontSize: 25, fontWeight: 'bold', position: 'absolute', margin: 10, paddingStart: 15, top: 330 }}>Order Summary</Text>
         <Text style={{bottom:60,alignItems:'flex-start',color:'black',fontSize:18,paddingStart:27}}>Subtotal</Text>
         <Text style={{bottom:50,alignItems:'flex-start',color:'black',fontSize:18,paddingStart:27}}>Est. Tax</Text>
         <Text style={{bottom:20,alignItems:'flex-start',color:'black',fontWeight:'bold',fontSize:18,paddingStart:27}}>Total</Text>
         <Text style={{bottom:133,alignItems:'flex-start',color:'black',fontSize:18,paddingStart:260}}>S$156.00</Text>
         <Text style={{bottom:123,alignItems:'flex-start',color:'black',fontSize:18,paddingStart:270}}>S$13.00</Text>
         <Text style={{bottom:94, color: '#4DB369',fontWeight: '800',fontSize:18,paddingStart:277,alignItems:'flex-start'}}>S$ 169</Text>
            

        <View style={styles.fixToText}>
            <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Screen12')}>
            <Text style={{textTransform: 'capitalize', fontSize: 18,color: 'white',fontWeight: 'bold',top:17,position: 'absolute',alignSelf:'center'}}>Proceed</Text>  
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
      width:290,
      left:-35,
      top:30,
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

export default Screen11;
