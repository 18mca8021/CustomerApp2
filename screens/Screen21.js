import * as React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Modal,
} from 'react-native';
import Services from './Services';

const Screen21 = ({navigation}) => {
  const Separator = () => <View style={styles.separator} />;

  return (
    <>
      <SafeAreaView>
        <View>
          <View style={{backgroundColor: '#000000'}}>
            <Image
              style={styles.direct}
              source={require('../images/back.png')}
              onPress={() => navigation.navigate('Screen4')}
            />
            <Text
              style={{
                color: 'white',
                textTransform: 'capitalize',
                fontWeight: 'bold',
                fontSize: 20,
                position: 'absolute',
                alignSelf: 'center',
                margin: 20,
                paddingEnd: 10,
                top: -13,
              }}
              onPress={() => navigation.navigate('Screen10')}>
              {' '}
              #13542{' '}
            </Text>
            <Separator />
          </View>
          <View style={{backgroundColor: '#000000'}}>
            <SafeAreaView style={styles.boundary}>
              <Separator />
              <Separator />
              <View style={{backgroundColor: '#ffffff'}}>
                <Services />

                <View>
                  <Text
                    style={{
                      color: 'black',
                      textTransform: 'capitalize',
                      fontSize: 20,
                      fontWeight: '800',
                      position: 'absolute',
                      margin: 10,
                      paddingStart: 23,
                      top: 130,
                    }}>
                    Order Summary
                  </Text>
                  <Text
                    style={{
                      top: 220,
                      alignItems: 'flex-start',
                      color: 'black',
                      fontSize: 17,
                      paddingStart: 34,
                    }}>
                    Completed on
                  </Text>
                  <Text
                    style={{
                      top: 225,
                      alignItems: 'flex-start',
                      color: 'black',
                      fontSize: 17,
                      paddingStart: 34,
                    }}>
                    Subtotal
                  </Text>
                  <Text
                    style={{
                      top: 230,
                      alignItems: 'flex-start',
                      color: 'black',
                      fontSize: 17,
                      paddingStart: 34,
                    }}>
                    Paid Advance
                  </Text>
                  <Text
                    style={{
                      top: 235,
                      alignItems: 'flex-start',
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 17,
                      paddingStart: 34,
                    }}>
                    Total Paid
                  </Text>
                  <Text
                    style={{
                      top: 240,
                      alignItems: 'flex-start',
                      color: 'black',
                      fontSize: 17,
                      paddingStart: 35,
                    }}>
                    Next Service Due on
                  </Text>
                  <Text
                    style={{
                      top: 245,
                      alignItems: 'flex-start',
                      color: 'black',
                      fontWeight: '600',
                      fontSize: 17,
                      paddingStart: 35,
                    }}>
                    Oil change mileage
                  </Text>

                  <Text
                    style={{
                      top: 82,
                      alignItems: 'flex-end',
                      color: 'black',
                      fontSize: 17,
                      paddingStart: 240,
                    }}>
                    02/11/2021
                  </Text>
                  <Text
                    style={{
                      top: 88,
                      alignItems: 'flex-end',
                      color: 'black',
                      fontSize: 17,
                      paddingStart: 257,
                    }}>
                    S$156.00
                  </Text>
                  <Text
                    style={{
                      top: 94,
                      alignItems: 'flex-end',
                      color: 'black',
                      fontSize: 17,
                      paddingStart: 267,
                    }}>
                    S$13.00
                  </Text>
                  <Text
                    style={{
                      top: 100,
                      alignItems: 'flex-end',
                      color: 'black',
                      fontSize: 17,
                      paddingStart: 257,
                    }}>
                    S$156.00
                  </Text>
                  <Text
                    style={{
                      top: 106,
                      alignItems: 'flex-end',
                      color: '#4DB369',
                      fontWeight: '800',
                      fontSize: 17,
                      paddingStart: 257,
                    }}>
                    S$ 169
                  </Text>
                </View>

                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />

                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
                <Separator />
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
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  direct: {
    alignSelf: 'flex-start',
    height: 30,
    width: 30,
    left: 20,
    top: 8,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'transparent',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  appButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'capitalize',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#f2994a',
    borderRadius: 15,
    paddingVertical: 30,
    paddingHorizontal: 12,
    margin: 20,
    width: 190,
    left: 150,
    top: 10,
    marginTop: 40,
    marginBottom: 60,
  },
  boundary: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#ffffff',
    borderRadius: 50,
  },
  fixToText: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
    position: 'relative',
    bottom: 20,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    top: 20,
    elevation: 8,
    left: 40,
    height: 120,
    width: 430,
    right: 170,
    padding: 50,
    marginTop: 410,
  },
});

export default Screen21;
