import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput,TouchableOpacity,SafeAreaView} from 'react-native';

const Screen4 = ({navigation}) => {

    const Separator = () => (
        <View style={styles.separator} />
      );

    return (
        <>
        <SafeAreaView>
        <View> 
          <View style={styles.bg}>
            <Image style={styles.direct} source={require('../images/orizonsmall.png')} />
            <Separator/>
            </View>
            <SafeAreaView style={styles.bg}>
            <View style={styles.boundary}>
            <Separator/>
            <Separator/>
            <Text style={styles.txt1}>Verify Phone number</Text>
            <Separator/>
            <Text style={styles.txt2}>Enter the OTP received on +65 12341234</Text>
            <Separator/>
            
            <View style={styles.innerview}>
            <TextInput placeholder='enter otp' keyboardType='numeric' style={styles.txtin} maxLength={6}/>
            </View>
            <View style={styles.fixToText}>
            <Separator/>
            <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('HomeScreen')} >
              <Text style={styles.appButtonText}>Submit</Text>
            </TouchableOpacity>
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
        </SafeAreaView>
        </View>
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    fixToText: {
      justifyContent:'center',
      alignSelf:'stretch',
      position:'relative',
      bottom:290
    },
    direct: {
       alignSelf:'flex-start',
       marginStart:10,
       alignSelf:'center'
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: 'transparent',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      appButtonText:{
        fontSize:18,
        color:"white",
        fontWeight:"bold",
        alignSelf:"center",
        textTransform:'capitalize'    
    },
    appButtonContainer:{
      elevation:8,
      backgroundColor:"#f2994a",
      borderRadius:10,
      paddingVertical:15,
      paddingHorizontal:12,
      margin: 20,
      marginHorizontal:25,
      top:280
  },
  boundary:{
    borderWidth:1,
    borderColor:'#000',
    backgroundColor:'#ffffff',
    borderRadius:45,
  },
  bg:{
    backgroundColor:'#000000'
  },
  innerview:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1.5,
    height:40,
    borderRadius:10,
    margin:5,
    marginVertical:10,
    marginHorizontal:25
  },
  txtin:{
    marginHorizontal:10
  },
  txt1:{
    alignSelf:'center',
    color:'black',
    textTransform:'none',
    fontWeight:'bold',
    fontSize:30
  },
  txt2:{
    alignSelf:'center',
    color:'#808080',
    left:-16
  }
});

export default Screen4;
