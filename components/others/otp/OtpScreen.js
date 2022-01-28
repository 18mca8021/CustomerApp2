import React,{useState} from 'react';
import { SafeAreaView,Text,View,StyleSheet } from 'react-native';
import { CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell } from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const OtpScreen = () => {
    
 const [value,setValue] = useState('');
 const ref = useBlurOnFulfill({value,cellCount:CELL_COUNT});
 const [props,getCellOnLayoutHandler] = useClearByFocusCell({value,setValue});

    return (
        <>
        <SafeAreaView style={styles.root}>
            <Text style={styles.title}>Underlined OTP example</Text>
            <CodeField
            ref={ref} {...props} value={value} onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.CodeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index,symbol,isFocused}) => (
                <View onLayout={getCellOnLayoutHandler(index)} key={index}
                style={[styles.cellRoot,isFocused && styles.focusCell]}>
                <Text style={styles.cellText}>
                    {symbol || (isFocused ? <Cursor/>:null)}
                </Text>
                </View>
            )}/>
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    root:{
       padding:20,
       minHeight:300, 
       alignContent:'space-between'
    },
    title:{
       textAlign:'center',
       fontSize:30
    },
    CodeFieldRoot:{
        marginTop:20,
        width:280,
        marginLeft:10,
        marginRight:10,
        
    },
    cellRoot:{
        width:60,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'#ccc',
        borderBottomWidth:3,
        
    },
    cellText:{
        color:'#000',
        fontSize:36,
        textAlign:'center',
        
    },
    focusCell:{
        borderBottomColor:'#007AFF',
        borderBottomWidth:2
    }
});

export default OtpScreen;