import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";

const GoalItemNative = ({text, index, deleteItem}) => (

    <>
        <Pressable android_ripple={{color: "#fff"}} onPress={() => {
            deleteItem(index);
        }}>

            <View style={{
                padding: 10,
                margin: 10,
                backgroundColor: 'grey',
                borderRadius: 15,
                alignItems: 'center',
            }}>
                <Text style={styles.bodyText}>
                    {
                        text
                    }
                </Text>
            </View>
        </Pressable>
    </>
);


const styles = StyleSheet.create({
    bodyText: {
        fontSize: 20,
        color: 'white',
        padding: 5,
        fontWeight: "normal",
    }
});

export default GoalItemNative;
