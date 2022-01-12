import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity,SafeAreaView,StatusBar,ScrollView,Image} from 'react-native';

const Screen17 = ({navigation}) => {

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
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: -25,alignSelf:'flex-start', left:10 }}>Close</Text>
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 18, fontWeight: '900', position: 'absolute', margin: 10, top: -30,alignSelf:'center'}}>Edit Profile</Text>
        <Text style={{ color: 'rgba(0, 122, 255, 1)', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: -25,alignSelf:'flex-end',right:10 }}>Save</Text>
        <Image style={{alignSelf:'center',height:100,width:100,top:40}} source={require('../images/profilepic.png')}/>
        <Image style={{alignSelf:'center',height:30,width:30,top:27}} source={require('../images/camera.png')}/>
        </View>

        <View>
        <Text style={{ color: 'grey', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 50,alignSelf:'flex-start',left:10 }}>Name</Text>
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 18, fontWeight: '800', position: 'absolute', margin: 10, top: 70,alignSelf:'flex-start',left:10 }}>Alfred Alex</Text>
        
        <Text style={{ color: 'grey', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 120,alignSelf:'flex-start',left:10 }}>Email</Text>
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 18, fontWeight: '700', position: 'absolute', margin: 10, top: 140,alignSelf:'flex-start',left:10 }}>alfred@gmail.com</Text>

        <Text style={{ color: 'grey', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 190,alignSelf:'flex-start',left:10 }}>Phone Number</Text>
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 18, fontWeight: '700', position: 'absolute', margin: 10, top: 210,alignSelf:'flex-start',left:10 }}>+91 7946132649</Text>

        <Text style={{ color: 'grey', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 260,alignSelf:'flex-start',left:10 }}>Bio</Text>
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 18, fontWeight: '700', position: 'absolute', margin: 10, top: 280,alignSelf:'flex-start',left:10 }}>********</Text>

         <View style={styles.fixToText}>
            <TouchableOpacity style={{
            backgroundColor:"#f2994a",
            borderRadius:15,
            paddingVertical:30,
            paddingHorizontal:12,
            margin: 20,
            width:290,
            left:-40,
            top:10,
            marginTop:355,
            marginBottom:485,
            paddingBottom:17,}}
            onPress={() => navigation.navigate('Screen18')}>
        <Text style={{textTransform: 'capitalize', fontSize: 18,color: 'white',top:10,position: 'absolute',alignSelf:'center',fontWeight: 'bold'}}>Save</Text>  
        </TouchableOpacity>
        </View>
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

export default Screen17;
