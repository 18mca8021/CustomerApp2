import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput,TouchableOpacity,SafeAreaView,ScrollView,Modal} from 'react-native';
import Date from './Date';
import {useState} from 'react';
import { StylesContext } from '@material-ui/styles';

const Screen9 = ({navigation}) => {

  const [showModal,setShowModal] = useState(false);

    const Separator = () => (
      
        <View style={styles.separator} />
      );

    return (
        <>
        <SafeAreaView >
        <View>
          <View style={styles.bg1}>
            <Image style={styles.direct} source={require('../images/back.png')} onPress={() => navigation.navigate('Screen4')}/>
            <Text style={styles.txt1}
            onPress={() => navigation.navigate('Screen10')}> Cleaning Control </Text>
            <Separator/>
            </View>
            <View style={styles.bg1}>
            <SafeAreaView  style={styles.boundary}>
              <Separator/>
              <Separator/>
        <View style={styles.bg2}>
          <View>
          <Text style={styles.txt2}>Chain Lubrication</Text>
          <Image style={styles.imgclock1} source={require('../images/clock.png')}/>
          <Text style={styles.txttime1}> 20 min</Text>
          <Text style={styles.txtmore1}>More info</Text>
          <Text style={styles.txtcost1}>$ 39</Text>
          
          
          <Text style={styles.txt6}>Chain Lubrication</Text>
          <Image style={styles.imgclock1} source={require('../images/clock.png')}/>
          <Text style={styles.txttime2}> 20 min</Text>
          <Text style={styles.txtmore2}>More info</Text>
          <Text style={styles.txtcost2}>$ 39</Text>
          
        </View> 

        <View style={styles.fixToText}>
            <TouchableOpacity style={styles.appButtonContainer} >
            <Text style={styles.appButtonText}
            onPress={() => { setShowModal(!showModal);}}>Proceed</Text>  
            </TouchableOpacity>
            <Text style={styles.txtbottom1}>$ 169</Text>
            <Text style={styles.txtbottom2}>1 item</Text>
            <Text style={styles.txtbottom3}>Inc. of all taxes</Text>
        </View>

        <Date/>

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

        <Text style={styles.txtbig1}>Morning</Text>
        <View style={styles.view1}></View>
        <View style={styles.view2}></View>
        <View style={styles.view3}></View>

        <Text style={styles.txtsmall1}>10:00</Text>
        <Text style={styles.txtsmall2}>10:45</Text>
        <Text style={styles.txtsmall3}>11:30</Text>


        <Text style={styles.txtbig2}>Afternoon</Text>        
        <View style={{alignSelf:'center',height:5,width:50,left:-107,bottom:280,borderWidth:1,borderColor:'grey',paddingBottom:30,top:-785,borderRadius:7}} ></View>
        <View style={{alignSelf:'center',height:5,width:50,left:-47,bottom:280,borderWidth:1,borderColor:'grey',paddingBottom:30,top:-817,borderRadius:7}}></View>
        <View style={{alignSelf:'center',height:5,width:50,left:13,bottom:280,borderWidth:1,borderColor:'grey',paddingBottom:30,top:-849,borderRadius:7}}></View>
        <View style={{alignSelf:'center',height:5,width:50,left:73,bottom:280,borderWidth:1,borderColor:'grey',paddingBottom:30,top:-881,borderRadius:7}}></View>
        <Text style={styles.txtsmall4}>01:00</Text>
        <Text style={styles.txtsmall5}>01:45</Text>
        <Text style={styles.txtsmall6}>02:30</Text>
        <Text style={styles.txtsmall7}>03:15</Text>

        <View style={{alignSelf:'center',height:5,width:50,left:-107,bottom:280,borderWidth:1,borderColor:'grey',paddingBottom:30,top:-875,borderRadius:7}}></View>
        <View style={{alignSelf:'center',height:5,width:50,left:-47,bottom:280,borderWidth:1,borderColor:'grey',paddingBottom:30,top:-907,borderRadius:7}}></View>
        <View style={{alignSelf:'center',height:5,width:50,left:13,bottom:280,borderWidth:1,borderColor:'grey',paddingBottom:30,top:-939,borderRadius:7}}></View>
        <View style={{alignSelf:'center',height:5,width:50,left:73,bottom:280,borderWidth:1,borderColor:'grey',paddingBottom:30,top:-971,borderRadius:7}}></View>
        <Text style={styles.txtsmall8}>04:00</Text>
        <Text style={styles.txtsmall9}>04:45</Text>
        <Text style={styles.txtsmall10}>05:30</Text>
        <Text style={styles.txtsmall11}>06:15</Text>

        <View style={{alignSelf:'center',height:5,width:50,left:-107,bottom:280,borderWidth:1,borderColor:'grey',paddingBottom:30,top:-965,borderRadius:7}}></View>
        <View style={{alignSelf:'center',height:5,width:50,left:-47,bottom:280,borderWidth:1,borderColor:'grey',paddingBottom:30,top:-997,borderRadius:7}}></View>
        <View style={{alignSelf:'center',height:5,width:50,left:13,bottom:280,borderWidth:1,borderColor:'grey',paddingBottom:30,top:-1029,borderRadius:7}}></View>
        <Text style={{textTransform: 'capitalize', fontSize: 14,color: 'black',fontWeight: 'normal',top:481,position: 'absolute',left:53}}>07:00</Text>
        <Text style={{textTransform: 'capitalize', fontSize: 14,color: 'black',fontWeight: 'normal',top:481,position: 'absolute',left:113}}>07:45</Text>
        <Text style={{textTransform: 'capitalize', fontSize: 14,color: 'black',fontWeight: 'normal',top:481,position: 'absolute',left:173}}>08:30</Text>

        <Image source={require('../images/sidellipse.png')} style={{ position: 'absolute', margin: 10, marginStart: 23,top:300,height:10,width:10 }}></Image>
        <Image source={require('../images/verticaline.png')} style={{ position: 'absolute', marginStart: 26.5,top:319, }}></Image>
        <Image source={require('../images/sidellipse.png')} style={{ position: 'absolute', margin: 10, marginStart: 23,top:368,height:10,width:10 }}></Image>

        <Image source={require('../images/separator2.png')} style={styles.sep1}></Image>
        <Image source={require('../images/separator2.png')} style={styles.sep2}></Image>
        <Image source={require('../images/separator1.png')} style={styles.sep3}></Image>

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

        <SafeAreaView style={{flex:0}}>        
       <View style={StylesContext.container}>
           <Modal
            animationType={'slide'}
            transparent={false}
            visible={showModal}
            onRequestClose={() =>{
                console.log('Modal has been closed.');
            }}>
            <View style={styles.modal}>
            <Text style={{alignSelf:'center',color:'black',fontSize:18,bottom:-80,fontWeight:'800'}}>Confirmation </Text>
                <Text style={{bottom:-120,alignSelf:'center',color:'black', fontSize:15,fontWeight:'500'}}>General Servicing</Text>
                <Text style={{bottom:-120,alignSelf:'center',color:'grey', fontSize:15}}>of Harley Davidson SQ 12345</Text>
                <Text style={{bottom:-120,alignSelf:'center',color:'black', fontSize:15,left:10,fontWeight:'500'}}>11:30 AM, 19th Sep2021.</Text>
                <Text style={{bottom:-100,alignSelf:'center',color:'grey', fontSize:15,right:83}}>at</Text>
                <TouchableOpacity style={{elevation:8,
      backgroundColor:"#f2994a",
      borderRadius:15,
      paddingVertical:30,
      paddingHorizontal:12,
      margin: 20,
      width:280,
      left:20,
      top:80,
      marginTop:60,
      marginBottom:60,
      paddingBottom:5}} onPress={() => navigation.navigate('Screen10')} >
              <Text style={{fontSize:18,
        color:"white",
        fontWeight:"bold",
        alignSelf:"center",
        textTransform:'capitalize',
        bottom:15}}>Continue</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{elevation:8,
      backgroundColor:"#f0f0f0",
      borderRadius:15,
      paddingVertical:20,
      paddingHorizontal:12,
      margin: 20,
      width:280,
      left:20,
      top:-25,
      marginTop:60,
      marginBottom:60,
      paddingBottom:5}} onPress={() => {
        setShowModal(!showModal);}}>
              <Text style={{fontSize:18,
        color:"grey",
        fontWeight:"bold",
        alignSelf:"center",
        textTransform:'capitalize',
        bottom:9}}>Cancel</Text>
              </TouchableOpacity>

                <Separator/>
                <Separator/>
                <Separator/>
                <Separator/>
                <Separator/>
                </View>
            </Modal>
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
        textTransform: 'capitalize', 
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        top:17,
        position: 'absolute',
        left:60
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
  bg1:{backgroundColor:'#000000'},
  bg2:{backgroundColor:'#ffffff'},
  txt1:{
    color:'white',
    textTransform:'capitalize',
    fontWeight:'bold',
    fontSize:20,
    position:'absolute',
    alignSelf:'center',
    margin:20,
    paddingEnd:10,
    top:-13
  },
  txt2:{
    color: 'black', 
    textTransform: 'capitalize', 
    fontSize: 18, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 25, 
    top: -20
  },
  txttime1:{
    color: 'grey', 
    textTransform: 'none', 
    fontSize: 13, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 40, 
    top: 10, 
  },
  txttime2:{
    color: 'grey', 
    textTransform: 'none', 
    fontSize: 13, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 40, 
    top: 105
  },
  txtmore1:{
    color: '#F2994A', 
    textTransform: 'none', 
    fontSize: 12, 
    fontWeight: 'normal', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 25, 
    top: 30 ,
  },
  txtmore2:{
    color: '#F2994A', 
    textTransform: 'none', 
    fontSize: 12, 
    fontWeight: 'normal', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 25, 
    top: 125
  },
  txtcost1:{
    color: 'black', 
    textTransform: 'capitalize', 
    fontSize: 18, 
    fontWeight: '800', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 240, 
    top: 5 ,
  },
txtcost2:{
    color: 'black', 
    textTransform: 'capitalize', 
    fontSize: 18, 
    fontWeight: '800', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 240, 
    top: 100
},
txtbottom1:{
  right:305,
  textTransform: 'capitalize', 
  fontSize: 22,
  color: '#4DB369',
  fontWeight: '800',
  bottom:60,
  position: 'absolute',
},
txtbottom2:{
  color: 'black', 
  textTransform: 'none', 
  fontSize: 10, 
  fontWeight: 'normal',
  right:270,
  bottom:65,
  position: 'absolute'
},
txtbottom3:{
  color: 'grey', 
  textTransform:'none', 
  fontSize: 14, 
  fontWeight: 'normal', 
  position: 'absolute',
  right:248,
  bottom:40 
},
sep1:{
  position: 'absolute', 
  top:157,
  maxWidth:295,
  start:35 
},
sep2:{
  position: 'absolute', 
  top:62,
  maxWidth:295,
  start:35 
},
sep3:{
  position: 'absolute', 
  top:65,
  maxWidth:295,
  start:35 
},
txtbig1:{
  textTransform: 'capitalize', 
  fontSize: 18,
  color: 'black',
  fontWeight: '400',
  top:300,
  position: 'absolute',
  left:47
},
txtbig2:{
  textTransform: 'capitalize', 
  fontSize: 18,
  color: 'black',
  fontWeight: '400',
  top:370,
  position: 'absolute',
  left:48
},
txtsmall1:{
  textTransform: 'capitalize', 
  fontSize: 14,
  color: 'black',
  fontWeight: 'normal',
  top:335,
  position: 'absolute',
  left:53
},
txtsmall2:{
  textTransform: 'capitalize', 
  fontSize: 14,
  color: 'black',
  fontWeight: 'normal',
  top:335,
  position: 'absolute',
  left:113
},
txtsmall3:{
  textTransform: 'capitalize', 
  fontSize: 14,
  color: 'black',
  fontWeight: 'normal',
  top:335,
  position: 'absolute',
  left:173
},
txtsmall4:{

},
txtsmall5:{

},
txtsmall6:{

},
txtsmall7:{

},
txtsmall8:{

},
txtsmall9:{

},
txtsmall10:{

},
txtsmall11:{

},
txtsmall12:{

},
txtsmall13:{

},
txtsmall14:{

},
view1:{
  alignSelf:'center',
  height:5,
  width:50,
  left:-107,
  bottom:280,
  borderWidth:1,
  borderColor:'grey',
  paddingBottom:30,
  top:-760,
  borderRadius:7
},
view2:{
  alignSelf:'center',
  height:5,
  width:50,
  left:-47,
  bottom:280,
  borderWidth:1,
  borderColor:'grey',
  paddingBottom:30,
  top:-792,
  borderRadius:7
},
view3:{
  alignSelf:'center',
  height:5,
  width:50,
  left:13,
  bottom:280,
  borderWidth:1,
  borderColor:'#f2994a',
  paddingBottom:30,
  top:-824,
  borderRadius:7,
  backgroundColor:'rgb(250, 241, 241)'},
  imgclock1:{
    alignSelf:'flex-start', margin: 10,height:15,width:15,left:25,top:12
  },
  imgclock2:{
    alignSelf:'flex-start', margin: 10,height:15,width:15,left:25,top:72
  },

});



export default Screen9;
