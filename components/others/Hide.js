import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const Hide = () => {
  const [text, setText] = useState("");
  const [hidePass, setHidePass] = useState(true);
  
  return (
    <>
        <View>
          <TextInput
            placeholder="enter mobile number"
            style={styles.textInput}
            value={text}
            //pass = {hidePass ? secureTextEntry : null} 
            keyboardType='numeric'
            onChangeText={(value) => setText(value)}
          />
          <TouchableOpacity
            style={styles.closeButtonParent}
            //onPress={() => {pass(hidePass)}}
          >
            <Image
              style={styles.closeButton}
              source={require("../images/eyecross.png")}
            />
          </TouchableOpacity>
        </View>
      </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: "90%",
    marginHorizontal:10,
  },
  closeButton: {
    height: 16,
    width: 16,
    position:'absolute'
  },
  closeButtonParent: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
    marginLeft:280,
    bottom:20

  },
});

export default Hide;