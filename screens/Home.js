import {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import AddGoalsAndroid from "../components/AddGoals";
import GoalItemNative from "../components/GoalItem";

const Home = ({navigation}) => {
    const [coupleGoals, setCoupleGoals] = useState([]);
    const [modalShown, setModalShown] = useState(false);
    const addEvent = (event) => {
        console.log(event);
        setCoupleGoals((prevCoupleGoals) => [event, ...prevCoupleGoals]);
        setModalShown(false);
    }

    const deleteItem = (index) => {
        setCoupleGoals(prevState => prevState.filter((item, i) => i !== index));
    }
    return (<>
        <StatusBar style={'light'}/>
        <View style={{
            flex: 1,
            backgroundColor: 'black',
        }}>

            <View style={{
                marginTop: 37,
                height: 75,
                padding: 15,
                borderRadius: 15,
            }}>
                <Button title={"Add Goals"} onPress={() => setModalShown(true)}/>
            </View>
            <AddGoalsAndroid addEvent={addEvent} show={modalShown} cancel={() => setModalShown(false)}/>
            <View style={{
                flex: 1,
                paddingRight: 10,
            }}>
                <Text style={styles.text}>
                    Your Goals
                </Text>
                <FlatList data={coupleGoals}
                          renderItem={
                              (item) => <GoalItemNative text={item.item} index={item.index}
                                                        deleteItem={deleteItem}/>
                          }
                          keyExtractor={(item, index) => index.toString()}

                />

            </View>

            <View style={styles.buttonContainer}>
                <Button title={"Profile"} onPress={() => navigation.navigate('profile')}/>
            </View>

        </View>
    </>)
}

export default Home;


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        margin: 4,
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
    },
    buttonContainer: {
        position: 'absolute',
        width: '40%',
        right: 20,
        bottom: 20,

    }
});



