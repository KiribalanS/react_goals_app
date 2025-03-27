import React, {useState} from 'react';
import {Alert, Button, Modal, Platform, StyleSheet, Text, TextInput, ToastAndroid, View} from "react-native";

const AddGoalsAndroid = ({addEvent, show, cancel}) => {
    function notifyMessage(msg) {
        if (Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            Alert.alert(msg);
        }
    }

    const [value, setValue] = useState('');
    return <Modal animationType={'fade'} style={{
        color: 'black',
        backgroundColor: 'black',
    }} visible={show}>
        <View style={styles.container}>
            <Text style={styles.text}>Enter a Goal</Text>
            {/*<StatusBar style="auto" />*/}
            <View style={{
                width: '100%',
                height: 75,
                // padding: 10,
                margin: 10,
                marginRight: 10,
                paddingRight: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <TextInput style={{
                    padding: 10,
                    flex: 1,
                    margin: 15,
                    color: 'white',
                    borderWidth: 1,
                    borderRadius: 15,
                    borderColor: 'white',
                }}
                           value={value}
                           onChangeText={setValue}
                           placeholder={"Enter a Goal"}
                           placeholderTextColor={'white'}/>
            </View>
            <View style={{
                width: '100%',
                padding: 15,
                margin: 15,
                justifyContent: 'space-between',
                height: 120,
            }}>
                <Button title={"Add Goal"} onPress={(event) => {

                    if (value) {
                        addEvent(value);
                        setValue("");
                    } else {
                        notifyMessage("Ethavathu type pannu da!!");
                    }
                }}/>
                <Button
                    title={"Cancel"} onPress={cancel}/>
            </View>
        </View>

    </Modal>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // margin: 4,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        // color: Colors.white,
        fontSize: 25,
        paddingLeft: 10,
        color: 'white',
        fontWeight: 'semibold',
    },
    bodyText: {
        fontSize: 20,
        color: 'white',
        padding: 5,
        fontWeight: "normal",
    }
});


export default AddGoalsAndroid;
