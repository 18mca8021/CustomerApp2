import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity,SafeAreaView,StatusBar,ScrollView,Image} from 'react-native';

const Screen15 = ({navigation}) => {

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
        
        <View style={{height:55,width:300,borderWidth:1,borderRadius:10,alignSelf:'flex-start',right:-30,top:10,borderColor:'grey'}}>
 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: 'bold', position: 'absolute', margin: 10, top: 5,alignSelf:'flex-start',left:115 }}>Ongoing</Text>
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: 'bold', position: 'absolute', margin: 10, top: 5,alignSelf:'flex-start',left:195 }}>Completed</Text>
        <View style={styles.fixToText}>
            <TouchableOpacity style={{
            backgroundColor:"orange",
            borderRadius:10,
            paddingVertical:25,
            paddingHorizontal:12,
            margin: 20,
            width:108,
            left:-73,
            top:-71,
            marginTop:-185,
            marginBottom:700,
            paddingBottom:30}}>
        <Text style={{textTransform: 'capitalize', fontSize: 15,color: 'white',fontWeight: '500',top:15,position: 'absolute',alignSelf:'center',fontWeight: 'bold'}}>Upcoming</Text>  
        </TouchableOpacity>
        </View>
        </View>
         
         
         
        <View style={{height:140,width:300,borderWidth:1,borderRadius:10,alignSelf:'flex-start',right:-30,top:20,borderColor:'grey'}}>
         <Text style={{ color: '#f2994a', textTransform: 'none', fontSize: 10, fontWeight: 'bold', position: 'absolute', margin: 10, top: 10,alignSelf:'flex-start',left:5 }}>#13542</Text>
         <View style={{height:23,width:72,borderWidth:0.5,borderRadius:5,backgroundColor:'rgba(222, 238, 255, 1)',alignSelf:'flex-start',right:-215,top:15}}/>
         <Text style={{ color: 'rgba(0, 122, 255, 1)', textTransform: 'none', fontSize: 12, fontWeight: 'bold', position: 'absolute', margin: 10, top: 8,alignSelf:'flex-end',left:215 }}>Accepted</Text>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 14, fontWeight: 'bold', position: 'absolute', margin: 10, top: 30,alignSelf:'flex-start',left:5 }}>General Service</Text>
         <Text style={{ color: 'grey', textTransform: 'none', fontSize: 12, fontWeight: 'bold', position: 'absolute', margin: 10, top: 50,alignSelf:'flex-start',left:5 }}>25 Nov 21, 03:00 - 4:30 PM</Text>
         <Text style={{ color: '#f2994a', textTransform: 'none', fontSize: 20, fontWeight: '900', position: 'absolute', margin: 10, top: 45,alignSelf:'flex-end',right:2 }}>$ 169</Text>
         <View style={styles.fixToText}>
            <TouchableOpacity style={{
            backgroundColor:"#fff",
            borderRadius:15,
            paddingVertical:25,
            paddingHorizontal:12,
            margin: 20,
            width:245,
            left:-45,
            top:10,
            marginTop:-185,
            marginBottom:700,
            borderColor:'pink',
            borderWidth:3,
            paddingBottom:5}} 
            onPress={() => navigation.navigate('Screen16')}>
        <Text style={{textTransform: 'capitalize', fontSize: 15,color: 'rgba(255, 92, 92, 1)',fontWeight: '500',top:3,position: 'absolute',alignSelf:'center',fontWeight: 'bold'}}>Cancel Booking</Text>  
        </TouchableOpacity>
        </View>
        </View>

        <View style={{height:140,width:300,borderWidth:1,borderRadius:10,alignSelf:'flex-start',right:-30,top:30,borderColor:'grey'}}>
         <Text style={{ color: '#f2994a', textTransform: 'none', fontSize: 10, fontWeight: 'bold', position: 'absolute', margin: 10, top: 10,alignSelf:'flex-start',left:5 }}>#13542</Text>
         <View style={{height:23,width:65,borderWidth:0.5,borderRadius:5,backgroundColor:'rgba(255, 239, 216, 1)',alignSelf:'flex-start',right:-215,top:15,left:222}}/>
         <Text style={{ color: 'rgba(255, 144, 0, 1)', textTransform: 'none', fontSize: 12, fontWeight: 'bold', position: 'absolute', margin: 10, top: 8,alignSelf:'flex-end',left:222 }}>Ongoing</Text>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 14, fontWeight: 'bold', position: 'absolute', margin: 10, top: 30,alignSelf:'flex-start',left:5 }}>Break oil top up</Text>
         <Text style={{ color: 'grey', textTransform: 'none', fontSize: 12, fontWeight: 'bold', position: 'absolute', margin: 10, top: 50,alignSelf:'flex-start',left:5 }}>25 Nov 21, 03:00 - 4:30 PM</Text>
         <Text style={{ color: '#f2994a', textTransform: 'none', fontSize: 20, fontWeight: '900', position: 'absolute', margin: 10, top: 45,alignSelf:'flex-end',right:2 }}>$ 169</Text>
         <View style={styles.fixToText}>
            <TouchableOpacity style={{
            backgroundColor:"#fff",
            borderRadius:15,
            paddingVertical:25,
            paddingHorizontal:12,
            margin: 20,
            width:245,
            left:-45,
            top:10,
            marginTop:-185,
            marginBottom:700,
            borderColor:'pink',
            borderWidth:3,
            paddingBottom:5}} 
            onPress={() => navigation.navigate('Screen11')}>
        <Text style={{textTransform: 'capitalize', fontSize: 15,color: 'rgba(255, 92, 92, 1)',fontWeight: '500',top:3,position: 'absolute',alignSelf:'center',fontWeight: 'bold'}}>Call Service Station</Text>  
        </TouchableOpacity>
        </View>
        </View>

        <View style={{height:140,width:300,borderWidth:1,borderRadius:10,alignSelf:'flex-start',right:-30,top:40,borderColor:'grey'}}>
         <Text style={{ color: '#f2994a', textTransform: 'none', fontSize: 10, fontWeight: 'bold', position: 'absolute', margin: 10, top: 10,alignSelf:'flex-start',left:5 }}>#13542</Text>
         <View style={{height:23,width:65,borderWidth:0.5,borderRadius:5,backgroundColor:'rgba(255, 239, 216, 1)',alignSelf:'flex-start',right:-215,top:15,left:222}}/>
         <Text style={{ color: 'rgba(255, 144, 0, 1)', textTransform: 'none', fontSize: 12, fontWeight: 'bold', position: 'absolute', margin: 10, top: 8,alignSelf:'flex-end',left:222 }}>Ongoing</Text>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 14, fontWeight: 'bold', position: 'absolute', margin: 10, top: 30,alignSelf:'flex-start',left:5 }}>Break oil top up</Text>
         <Text style={{ color: 'grey', textTransform: 'none', fontSize: 12, fontWeight: 'bold', position: 'absolute', margin: 10, top: 50,alignSelf:'flex-start',left:5 }}>25 Nov 21, 03:00 - 4:30 PM</Text>
         <Text style={{ color: '#f2994a', textTransform: 'none', fontSize: 20, fontWeight: '900', position: 'absolute', margin: 10, top: 45,alignSelf:'flex-end',right:2 }}>$ 169</Text>
         <View style={styles.fixToText}>
            <TouchableOpacity style={{
            backgroundColor:"#fff",
            borderRadius:15,
            paddingVertical:25,
            paddingHorizontal:12,
            margin: 20,
            width:245,
            left:-45,
            top:10,
            marginTop:-185,
            marginBottom:700,
            borderColor:'pink',
            borderWidth:3,
            paddingBottom:5}} 
            onPress={() => navigation.navigate('Screen11')}>
        <Text style={{textTransform: 'capitalize', fontSize: 15,color: 'rgba(255, 92, 92, 1)',fontWeight: '500',top:3,position: 'absolute',alignSelf:'center',fontWeight: 'bold'}}>Confirm Job Updates</Text>  
        </TouchableOpacity>
        </View>
        </View>

        <View style={{height:140,width:300,borderWidth:1,borderRadius:10,alignSelf:'flex-start',right:-30,top:50,borderColor:'grey'}}>
         <Text style={{ color: '#f2994a', textTransform: 'none', fontSize: 10, fontWeight: 'bold', position: 'absolute', margin: 10, top: 10,alignSelf:'flex-start',left:5 }}>#13542</Text>
         <View style={{height:23,width:75,borderWidth:0.5,borderRadius:5,backgroundColor:'rgba(77, 179, 105, 0.1)',alignSelf:'flex-start',right:-215,top:15}}/>
         <Text style={{ color: 'rgba(77, 179, 105, 1)', textTransform: 'none', fontSize: 12, fontWeight: 'bold', position: 'absolute', margin: 10, top: 8,alignSelf:'flex-end',left:212 }}>Completed</Text>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 14, fontWeight: 'bold', position: 'absolute', margin: 10, top: 30,alignSelf:'flex-start',left:5 }}>Bike Wash</Text>
         <Text style={{ color: 'grey', textTransform: 'none', fontSize: 12, fontWeight: 'bold', position: 'absolute', margin: 10, top: 50,alignSelf:'flex-start',left:5 }}>25 Nov 21, 03:00 - 4:30 PM</Text>
         <Text style={{ color: '#f2994a', textTransform: 'none', fontSize: 20, fontWeight: '900', position: 'absolute', margin: 10, top: 45,alignSelf:'flex-end',right:2 }}>$ 169</Text>
         <View style={styles.fixToText}>
            <TouchableOpacity style={{
            backgroundColor:"#fff",
            borderRadius:15,
            paddingVertical:25,
            paddingHorizontal:12,
            margin: 20,
            width:245,
            left:-45,
            top:10,
            marginTop:-185,
            marginBottom:700,
            borderColor:'pink',
            borderWidth:3,
            paddingBottom:5}} 
            onPress={() => navigation.navigate('Screen11')}>
        <Text style={{textTransform: 'capitalize', fontSize: 15,color: 'rgba(255, 92, 92, 1)',fontWeight: '500',top:3,position: 'absolute',alignSelf:'center',fontWeight: 'bold'}}>Share Feedback</Text>  
        </TouchableOpacity>
        </View>
        </View>

        <View style={{height:170,width:300,borderWidth:1,borderRadius:10,alignSelf:'flex-start',right:-30,top:60,borderColor:'grey'}}>
         <Text style={{ color: '#f2994a', textTransform: 'none', fontSize: 10, fontWeight: 'bold', position: 'absolute', margin: 10, top: -10,alignSelf:'flex-start',left:5 }}>#13542</Text>
         <View style={{height:23,width:75,borderWidth:0.5,borderRadius:5,backgroundColor:'rgba(77, 179, 105, 0.1)',alignSelf:'flex-start',right:-215,top:15}}/>
         <Text style={{ color: 'rgba(77, 179, 105, 1)', textTransform: 'none', fontSize: 12, fontWeight: 'bold', position: 'absolute', margin: 10, top: 8,alignSelf:'flex-end',left:212 }}>Completed</Text>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 14, fontWeight: 'bold', position: 'absolute', margin: 10, top: 30,alignSelf:'flex-start',left:5 }}>Bike Wash</Text>
         <Text style={{ color: 'grey', textTransform: 'none', fontSize: 12, fontWeight: 'bold', position: 'absolute', margin: 10, top: 50,alignSelf:'flex-start',left:5 }}>25 Nov 21, 03:00 - 4:30 PM</Text>
         <Text style={{ color: '#f2994a', textTransform: 'none', fontSize: 20, fontWeight: '900', position: 'absolute', margin: 10, top: 45,alignSelf:'flex-end',right:2 }}>$ 169</Text>
         <Image style={{alignSelf:'center',height:30,width:30,left:-60,top:58}} source={require('../images/star1.png')}/>
         <Image style={{alignSelf:'center',height:30,width:30,left:-30,top:28}} source={require('../images/star1.png')}/>
         <Image style={{alignSelf:'center',height:30,width:30,left:0,top:-2}} source={require('../images/star1.png')}/>
         <Image style={{alignSelf:'center',height:30,width:30,left:30,top:-32}} source={require('../images/star1.png')}/>
         <Image style={{alignSelf:'center',height:30,width:30,left:60,top:-62}} source={require('../images/star2.png')}/>
         <View style={styles.fixToText}>
            <TouchableOpacity style={{
            backgroundColor:"#fff",
            borderRadius:15,
            paddingVertical:25,
            paddingHorizontal:12,
            margin: 20,
            width:245,
            left:-45,
            top:10,
            marginTop:-125,
            marginBottom:700,
            borderColor:'pink',
            borderWidth:3,
            paddingBottom:5,
            textTransform:'none'}} 
            onPress={() => navigation.navigate('Screen11')}>
        <Text style={{textTransform: 'none', fontSize: 15,color: 'rgba(255, 92, 92, 1)',fontWeight: '500',top:3,position: 'absolute',alignSelf:'center',fontWeight: 'bold'}}>Proceed to payment</Text>  
        </TouchableOpacity>
        </View>
        </View>

        <View style={{height:100,width:300,borderWidth:1,borderRadius:10,alignSelf:'flex-start',right:-30,top:70,borderColor:'grey'}}>
         <Text style={{ color: '#f2994a', textTransform: 'none', fontSize: 10, fontWeight: 'bold', position: 'absolute', margin: 10, top: 10,alignSelf:'flex-start',left:5 }}>#13542</Text>
         <View style={{height:23,width:75,borderWidth:0.5,borderRadius:5,backgroundColor:'rgba(243, 74, 58, 0.1)',alignSelf:'flex-start',right:-215,top:15}}/>
         <Text style={{ color: 'rgba(244, 67, 54, 1)', textTransform: 'none', fontSize: 12, fontWeight: 'bold', position: 'absolute', margin: 10, top: 8,alignSelf:'flex-end',left:217 }}>Cancelled</Text>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 14, fontWeight: 'bold', position: 'absolute', margin: 10, top: 30,alignSelf:'flex-start',left:5 }}>Bike Wash</Text>
         <Text style={{ color: 'grey', textTransform: 'none', fontSize: 12, fontWeight: 'bold', position: 'absolute', margin: 10, top: 50,alignSelf:'flex-start',left:5 }}>25 Nov 21, 03:00 - 4:30 PM</Text>
         <Text style={{ color: '#f2994a', textTransform: 'none', fontSize: 20, fontWeight: '900', position: 'absolute', margin: 10, top: 45,alignSelf:'flex-end',right:2 }}>$ 169</Text>
        </View>

        <View style={{height:100,width:300,borderWidth:1,borderRadius:10,alignSelf:'flex-start',right:-30,top:80,borderColor:'grey'}}>
         <Text style={{ color: '#f2994a', textTransform: 'none', fontSize: 10, fontWeight: 'bold', position: 'absolute', margin: 10, top: 10,alignSelf:'flex-start',left:5 }}>#13542</Text>
         <View style={{height:23,width:75,borderWidth:0.5,borderRadius:5,backgroundColor:'rgba(0, 0, 0, 0.1)',alignSelf:'flex-start',right:-215,top:15}}/>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 12, fontWeight: 'bold', position: 'absolute', margin: 10, top: 8,alignSelf:'flex-end',left:217 }}>No Show</Text>
         <Text style={{ color: 'black', textTransform: 'none', fontSize: 14, fontWeight: 'bold', position: 'absolute', margin: 10, top: 30,alignSelf:'flex-start',left:5 }}>Bike Wash</Text>
         <Text style={{ color: 'grey', textTransform: 'none', fontSize: 12, fontWeight: 'bold', position: 'absolute', margin: 10, top: 50,alignSelf:'flex-start',left:5 }}>25 Nov 21, 03:00 - 4:30 PM</Text>
         <Text style={{ color: '#f2994a', textTransform: 'none', fontSize: 20, fontWeight: '900', position: 'absolute', margin: 10, top: 45,alignSelf:'flex-end',right:2 }}>$ 169</Text>
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
       left:20,
       top:108
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

export default Screen15;
