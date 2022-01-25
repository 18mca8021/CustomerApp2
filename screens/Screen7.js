import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput,TouchableOpacity,SafeAreaView,Modal} from 'react-native';
import { StylesContext } from '@material-ui/styles';
import {useState} from 'react';
import Radio  from './Radio';
import Radio2 from './Radio2';
import Radio3 from './Radio3';

const Screen7 = ({navigation}) => {
  const [showModal,setShowModal] = useState(false);
    const Separator = () => (
        <View style={styles.separator} />
      );

    return (
        <>
        <SafeAreaView > 
        <View>
          <View style={styles.bg1}>
            <Image style={styles.direct} source={require('../components/images/back.png')} 
            onPress={() => navigation.navigate('Home')}/>
            <Text style={styles.txt1}>Replacement Bike</Text>
            <Separator/>
            </View>
           
            <View style={styles.bg1}>
            <SafeAreaView  style={styles.boundary}>
              <Separator/>
              <Separator/>  
        <View style={styles.bg2}>
        <Radio />
        <Radio2/>
        <Radio3/>
          <Image source={require('../components/images/bikereplace.png')} style={styles.img}></Image>   
          <Text style={styles.txt2} onPress={() => navigation.navigate('Screen8')}>We got you moving.</Text>
          <Text style={styles.txt3}>Would you like to book a replacement bike till we get your vehicle ready?</Text>   
          <Text style={styles.txt4}>9 Bikes available for you</Text>
          
          <View>
          
          <Image source={require('../components/images/bike1.png')} style={styles.imgsmall1} ></Image>
          <Text style={styles.txt1item1}>Class A Bike</Text>
          <Image source={require('../components/images/dot.png')} style={styles.img1item1}></Image>
          <Text style={styles.txt2item1}> S$ 39</Text>
          <Text style={styles.txt3item1}>/</Text>
          <Text style={styles.txt4item1}>day</Text>
          <Image source={require('../components/images/infoicon.png')} style={styles.img2item1}></Image>
          <Image source={require('../components/images/separator2.png')} style={styles.sep1}></Image>
          </View>

          <View>
          <Image source={require('../components/images/bike2.png')} style={styles.imgsmall2}></Image>
          <Text style={styles.txt1item2}>Class B Bike</Text>
          <Image source={require('../components/images/dot.png')} style={styles.img1item2}></Image>
          <Text style={styles.txt2item2}> S$ 29</Text>
          <Text style={styles.txt3item2}>/</Text>
          <Text style={styles.txt4item2}>day</Text>
          <Image source={require('../components/images/infoicon.png')} style={styles.img2item2}></Image>
          <Image source={require('../components/images/separator2.png')} style={styles.sep2}></Image>
          </View>


          <View>
          <Image source={require('../components/images/bike3.png')} style={styles.imgsmall3}></Image>
          <Text style={styles.txt1item3}>Class B Bike</Text>
          <Image source={require('../components/images/dot.png')} style={styles.img1item3}></Image>
          <Text style={styles.txt2item3}> S$ 29</Text>
          <Text style={styles.txt3item3}>/</Text>
          <Text style={styles.txt4item3}>day</Text>
          <Image source={require('../components/images/infoicon.png')} style={styles.img2item3}></Image>
          <Image source={require('../components/images/separator2.png')} style={styles.sep3}></Image>
          </View>



          <View style={styles.fixToText}>
            <TouchableOpacity style={styles.appButtonContainer} >
            <Text style={styles.appButtonText} onPress={() => {setShowModal(!showModal);}}>Submit</Text>  
            </TouchableOpacity>
            <Text style={styles.txtbottom1}>$ 169</Text>
            <Text style={styles.txtbottom2}>1 item</Text>
            <Text style={styles.txtbottom3}>Inc. of all taxes</Text>
          </View>


      <SafeAreaView style={styles.safearea}>        
       <View style={StylesContext.container}>
           <Modal  animationType={'slide'} transparent={false} visible={showModal} onRequestClose={() =>{ console.log('Modal has been closed.');}}>
            <View style={styles.modal}>
            <Image source={require('../components/images/bigbike.png')} style={styles.imgmodal1}></Image>
            <Image source={require('../components/images/bigbikepart.png')} style={styles.imgmodal2}></Image>
            <Text style={styles.txtmodal1}>Continental GT </Text>
            <Text style={styles.txtmodal2}>650 CC - Black</Text>
                <Text style={styles.txtmodal3}>VRN</Text>
                <Text style={styles.txtmodal4}>Run till now</Text>
                <Text style={styles.txtmodal5}>Cost per day</Text>
                <Text style={styles.txtmodal6}>Cubic Capacity</Text>
                <Text style={styles.txtmodal7}>0-60kmph</Text>
                <Text style={styles.txtmodal8}>5478456541</Text>
                <Text style={styles.txtmodal9}>5000 km</Text>
                <Text style={styles.txtmodal10}>S$16.00</Text>
                <Text style={styles.txtmodal11}>650cc</Text>
                <Text style={styles.txtmodal12}>4.5s</Text>
                <Separator/>
                <Text style={styles.txtmodal13}
                onPress={() => { setShowModal(!showModal);}}>Terms & Conditions</Text>
                <Separator/>
                <Separator/>
                <Separator/>
                <Separator/>
                <Separator/>
                </View>
            </Modal>
       </View>
      </SafeAreaView>

      

        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
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
        left:40,
        textTransform: 'capitalize', 
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        top:17,
        position: 'absolute',
      },
    appButtonContainer:{
      elevation:8,
      backgroundColor:"#f2994a",
      borderRadius:15,
      paddingVertical:30,
      paddingHorizontal:12,
      margin: 20,
      width:140,
      left:190,
      top:10,
      marginTop:40,
      marginBottom:60,
      bottom:110,
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
    bottom:20,
    borderRadius:10,
    paddingVertical:10,
    paddingHorizontal:30,
    top:30,
    elevation:8,
    left:-40,
    height:115,
    width:400,
    right:170,
    padding:50,   
    marginTop:480,
  },
  container: {
    flex:0,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ec4344',
    marginTop:120,
    width:50,
    height:100,
    
  },
  modal:{
      flex:0,
      alignItems:'center',
      backgroundColor:'00ff00',
      padding:100,
      marginTop:50,
      margin:0
  },
  text:{ 
      color:'#3f2979',
      marginTop:10
  },
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
      color:'black',
      textTransform:'none',
      fontWeight:'bold',
      fontSize:20,
      position:'relative',
      alignSelf:'flex-start',
      margin:20,
      paddingEnd:10,
      bottom:150
    },
    txt3:{
      color:'black',
      textTransform:'none',
      fontWeight:'500',
      fontSize:16,
      position:'relative',
      alignSelf:'flex-start',
      margin:20,
      paddingEnd:10,
      bottom:190
    },
    txt4:{
      color:'grey',
      textTransform:'none',
      fontWeight:'normal',
      fontSize:13,
      position:'relative',
      alignSelf:'flex-start',
      margin:20,
      paddingEnd:10,
      bottom:230
    },
  txt1item1:{ 
    color: 'orange', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 105, 
    bottom: 285 
  },
  txt2item1:{ 
    color: 'black', 
    textTransform: 'none', 
    fontSize: 13, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 210, 
    bottom: 286 
  },
  txt3item1:{ 
    color: 'black', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 246, 
    bottom: 285 
  },
  txt4item1:{ 
    color: 'black', 
    textTransform: 'none', 
    fontSize: 11, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 250, 
    bottom: 285 
  },
  txt1item2:{ 
    color: 'pink', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 105, 
    bottom: 308
   },
  txt2item2:{ 
    color: 'black', 
    textTransform: 'none', 
    fontSize: 13, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 210, 
    bottom: 309
   },
  txt3item2:{ 
    color: 'black', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 246, 
    bottom: 308 
  },
  txt4item2:{ 
    color: 'black', 
    textTransform: 'none', 
    fontSize: 11, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 250, 
    bottom: 307 
  },
  txt1item3:{ 
    color: 'pink', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 105, 
    bottom: 330 },
  txt2item3:{ 
    color: 'black', 
    textTransform: 'none', 
    fontSize: 13, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 210, 
    bottom: 331 },
  txt3item3:{ 
    color: 'black', 
    textTransform: 'none', 
    fontSize: 15, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 246, 
    bottom: 330 
  },
  txt4item3:{ 
    color: 'black', 
    textTransform: 'none', 
    fontSize: 11, 
    fontWeight: 'bold', 
    position: 'absolute', 
    margin: 10, 
    paddingStart: 250, 
    bottom: 330
   },
   txtbottom1:{
    right:270,
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
    right:235,
    bottom:65,
    position: 'absolute'
  },
  txtbottom3:{
    color: 'grey', 
    textTransform:'none', 
    fontSize: 14, 
    fontWeight: 'normal', 
    position: 'absolute',
    right:227,
    bottom:40 
  },
  txtmodal1:{
    bottom:100,
    alignSelf:'flex-start',
    color:'white',
    fontSize:18,
    position:'relative',
    end:40
  },
  txtmodal2:{
  bottom:125,
  alignSelf:'flex-end',
  color:'white',
  fontSize:18,
  position:'relative',
  start:40
},
  txtmodal3:{
    bottom:70,
    alignItems:'flex-start',
    color:'black',
    right:130,
    fontSize:18
  },
  txtmodal4:{
    bottom:60,
    alignItems:'flex-start',
    color:'black',
    right:102,
    fontSize:18
  },
  txtmodal5:{
    bottom:50,
    alignItems:'flex-start',
    color:'black',
    right:98,
    fontWeight:'bold',
    fontSize:18
  },
  txtmodal6:{
    bottom:40,
    alignItems:'flex-start',
    color:'black',
    right:89,
    fontSize:18
  },
  txtmodal7:{
    bottom:30,
    alignItems:'flex-start',
    color:'black',
    right:108,
    fontSize:18
  },
  txtmodal8:{
    top:-192.5,
    alignSelf:'flex-start',
    color:'black',
    left:127,
    fontSize:18
  },
  txtmodal9:{
    top:-182.5,
    alignSelf:'flex-end',
    color:'black',
    left:65,
    fontSize:18
  },
  txtmodal10:{
    top:-172.5,
    alignSelf:'flex-end',
    color:'black',
    left:70,
    fontWeight:'bold',
    fontSize:18
  },
  txtmodal11:{
    top:-162.5,
    alignSelf:'flex-end',
    color:'black',
    left:70,
    fontSize:18
  },
  txtmodal12:{
    top:-152.5,
    alignSelf:'flex-end',
    color:'black',
    left:70,
    fontSize:18
  },
  txtmodal13:{
    bottom:140,
    alignSelf:'center',
    color:'rgba(0, 122, 255, 1)', 
    fontSize:13
  },
    bg1:{
    backgroundColor:'#000000'
  },
  bg2:{
    backgroundColor:'#ffffff'
  },
  safearea:{
    flex:0
  },
  img:{ 
    width: 315, 
    height: 200, 
    margin: 20, 
    borderRadius: 25, 
    bottom: 115 },
  imgsmall1:{ 
    position: 'relative', 
    margin: 10, 
    marginStart: 45,
    bottom:250,
    height:60,
    width:60
   },
  imgsmall2:{ 
    position: 'relative', 
    margin: 10, 
    marginStart: 45,
    bottom:275 ,
    height:60,
    width:60
  },
  imgsmall3:{ 
    position: 'relative', 
    margin: 10, 
    marginStart: 45,
    bottom:300,
    height:60,
    width:60 
  },
  img1item1:{ 
    position: 'absolute', 
    margin: 10, 
    marginStart:208,
    height:5,
    width:5,
    bottom:292 
  },
  img2item1:{
    marginHorizontal:315,
    height:25,
    width:25,
    bottom:313
  },
  img1item2:{ 
    position: 'absolute', 
    margin: 10, 
    marginStart:208,
    height:5,
    width:5,
    bottom:315
   },
  img2item2:{
    marginHorizontal:315,
    height:25,
    width:25,
    bottom:338
  },
  img1item3:{ 
    position: 'absolute', 
    margin: 10, 
    marginStart:208,
    height:5,
    width:5,
    bottom:337
   },
  img2item3:{
    marginHorizontal:315,
    height:25,
    width:25,
    bottom:368
  },
  imgmodal1:{ 
    width: 300, 
    height: 200, 
    margin: 10, 
    borderRadius: 25,
    marginTop:-110
   },
  imgmodal2:{ 
    width: 300, 
    height: 50,
    bottom:60,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25
   },  
  sep1:{
    position: 'absolute', 
    bottom:265,
    maxWidth:315,
    start:20 
  },
  sep2:{
    position: 'absolute', 
    bottom:290,
    maxWidth:315,
    start:20 
  },
  sep3:{
    position: 'absolute', 
    bottom:315,
    maxWidth:315,
    start:20 
  },
});

export default Screen7;
