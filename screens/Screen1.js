import * as React from 'react';
import { View, Image, StyleSheet, Text,TouchableOpacity,SafeAreaView,StatusBar} from 'react-native';


const Screen1 = ({navigation}) => {

    const Separator = () => (
        <View style={styles.separator} />
      );

    return (
        <>
        <View>
        <StatusBar style={styles.sb}/>
        </View>
        <SafeAreaView>
        <View style={styles.container}> 
        <Separator />
        <Separator />
        <Separator />
        <Separator />
        <Separator />
        <Separator/>
        <Separator/>
            <Image style={styles.direct} source={require('../images/logoout.png')} />
            <Separator />
            <Text style={styles.txt1}>All services on your fingertips.</Text>
            <Separator />
            <Separator />
            <Separator />
            <Separator />
            <View style={styles.fixToText}>
            <TouchableOpacity style={styles.btn1} 
              onPress={() => navigation.navigate('Screen2')} >
              <Text style={styles.appButtonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn2} 
              onPress={() => navigation.navigate('Screen3')} >
              <Text style={styles.appButtonText}>Sign Up</Text>
            </TouchableOpacity>
              </View>
        </View>
        <View style={styles.container}>
          <Separator/>
          <Separator/>
          <Separator/>
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
        </>
    );
};

const styles = StyleSheet.create({
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    direct: {
       alignSelf:'center',
       
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: 'transparent',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
    container: {
        backgroundColor:'#000000',
    },
    appButtonText:{
        fontSize:18,
        color:"white",
        fontWeight:"bold",
        alignSelf:"center",
        textTransform:"capitalize",
        margin:10,
        marginHorizontal:30,
    },
    sb:{
      backgroundColor:"#000"
    },
    txt1:{
      alignSelf:'center',
      color:'white'
    },
    txt2:{
      alignSelf:'center',
      color:'black'
    },
    btn1:{
      elevation:8,
      backgroundColor:"#f2994a",
      borderRadius:10,
      paddingVertical:10,
      paddingHorizontal:12,
      margin: 25,
    },
    btn2:{
      elevation:8,
      backgroundColor:"#808080",
      borderRadius:10,
      paddingVertical:10,
      paddingHorizontal:12,
      margin: 25
    },
});

export default Screen1;