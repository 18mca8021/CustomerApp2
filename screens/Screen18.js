import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput,TouchableOpacity,SafeAreaView,StatusBar} from 'react-native';

const Screen18 = ({navigation}) => {

    const Separator = () => (
        <View style={styles.separator} />
      );

    return (
        <>
        <SafeAreaView >
            <Image style={styles.direct} source={require('../images/back2.png')} onPress={() => navigation.navigate('Screen9')}/>
              <Separator/>
              <Separator/>

            <StatusBar backgroundColor='#f0f0f0' barStyle='dark-content'/>

            <Image style={{alignSelf:'center', margin: 10,top:17,height:170,width:250}} source={require('../images/piggybankbg.png')}/>
         <Image style={{alignSelf:'center', margin: 10,top:-167,height:150,width:150}} source={require('../images/piggybank.png')}/>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 25, fontWeight: '900', position: 'absolute', margin: 10, top: 310,alignSelf:'center' }}>Share with friends</Text>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 350,alignSelf:'center' }}>Refer to a friend and earn $5</Text>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 375,alignSelf:'center' }}>cash reward.</Text>

        <View style={styles.fixToText}>
            <TouchableOpacity style={{
      backgroundColor:"#f2994a",
      borderRadius:15,
      paddingVertical:30,
      paddingHorizontal:12,
      margin: 20,
      width:230,
      left:-5,
      top:10,
      marginTop:40,
      marginBottom:180,}} 
      onPress={() => navigation.navigate('Screen19')}>
        <Text style={{textTransform: 'capitalize', fontSize: 18,color: 'white',fontWeight: 'bold',top:17,position: 'absolute',alignSelf:'center'}}>Share Now</Text>  
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
      //elevation:8,
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

export default Screen18;
