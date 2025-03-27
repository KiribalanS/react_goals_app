import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const Profile = (props) => (
    <>
        <View style={styles.container}>
            <Text>
                Profile Screen.
            </Text>
        </View>
    </>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Profile;
