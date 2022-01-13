import * as React from 'react';
import { View, Image, StyleSheet, Text, TextInput, SafeAreaView, StatusBar } from 'react-native';

const Screen19 = ({navigation}) => {

  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <>
      <SafeAreaView >
          <StatusBar backgroundColor='black' barStyle='light-content'/>
        <View>
          <View style={styles.bg1}>
            <Image style={styles.direct} source={require('../images/back.png')}/>
            <Text style={{bottom:10,color:'white',alignSelf:'center',fontWeight:'bold'}} 
            onPress={() => navigation.navigate('Screen20')}>FAQ's</Text>
            <Separator/>
          </View>
          
          <View style={styles.bg1}>
            <View style={styles.boundary}>
              <Separator/>
              <Separator/>
            <View style={styles.bg2}>
            <View style={styles.view1}>
              <Image style={styles.img1} source={require('../images/search.png')} />
              <View style={styles.view2}>
              <TextInput placeholder='Search' maxLength={50}/>
              </View>
            </View>
            </View>
          <View style={styles.bg2 }> 
         
        <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 15,alignSelf:'flex-start',left:15 }}>Morbi mauris nibh enim vestibulum</Text>
        <Image style={{alignSelf:'center',left:140,top:28,}} source={require('../images/forward2.png')}/>
          
      </View>

      <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 50,alignSelf:'flex-start',left:15 }}>Nunc consectetur porttitor dignissim eget</Text>
        <Image style={{alignSelf:'center',left:140,top:62,}} source={require('../images/forward2.png')}/>
          
      </View>

      <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 85,alignSelf:'flex-start',left:15 }}>Urna, consectetur hendrerit tincidunt nunc</Text>
        <Image style={{alignSelf:'center',left:140,top:98,}} source={require('../images/forward2.png')}/>
          
      </View>

      <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 120,alignSelf:'flex-start',left:15 }}>Eget in morbi tellus commodo</Text>
        <Image style={{alignSelf:'center',left:140,top:132,}} source={require('../images/forward2.png')}/>
          
      </View>

      <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 155,alignSelf:'flex-start',left:15 }}>Purus sodales hac neque nunc</Text>
        <Image style={{alignSelf:'center',left:140,top:166,}} source={require('../images/forward2.png')}/>
          
      </View>

      <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 190,alignSelf:'flex-start',left:15 }}>Vel, sed volutpat, nec varius</Text>
        <Image style={{alignSelf:'center',left:140,top:200,}} source={require('../images/forward2.png')}/>
          
      </View>

      <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 225,alignSelf:'flex-start',left:15 }}>Proin posuere ligula aliquet arcu</Text>
        <Image style={{alignSelf:'center',left:140,top:236,}} source={require('../images/forward2.png')}/>
          
      </View>

      <View> 
        <Text style={{ color: 'black', textTransform: 'none', fontSize: 15, fontWeight: '500', position: 'absolute', margin: 10, top: 260,alignSelf:'flex-start',left:15 }}>Vitae volutpar eros, diam nisi</Text>
        <Image style={{alignSelf:'center',left:140,top:271,}} source={require('../images/forward2.png')}/>
          
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
  boundary:{
    borderWidth:1,
    borderColor:'#000',
    backgroundColor:'#ffffff',
    borderRadius:45,
  },
bg1:{
  backgroundColor:'#000000'
},
bg2:{
  backgroundColor:'#ffffff'
},
txt1:{
  color:'white',
  textTransform:'none',
  fontWeight:'500',
  fontSize:20,
  position:'absolute',
  alignSelf:'center',
  margin:20,
  paddingEnd:10,
  bottom:-5
},
view1:{ 
  flexDirection: 'row', 
  alignItems: 'center', 
  borderWidth: 0, 
  height: 50, 
  borderRadius: 10, 
  margin: 5, 
  marginVertical: 10, 
  marginHorizontal: 40,
  borderColor:'black',
  backgroundColor:'#f1f1f1', 
},
view2:{  
  height: 40, 
  margin: 5, 
  marginVertical: 10, 
  marginHorizontal: 5,
  borderColor:'black',
},
img1:{
  padding: 15, 
  margin: 5, 
  height: 25, 
  width: 25, 
  resizeMode: 'stretch', 
  alignItems: 'center', 
  left:5 
},
img2:{

},
img3:{

},
img4:{

},
img5:{

},
img6:{

},
img7:{

},
img8:{

},
img9:{

},
txt1:{
  
},
txt2:{

},
txt3:{

},
txt4:{

},
txt5:{

},
txt6:{

},
txt7:{

},
txt8:{

},
});

export default Screen19;
