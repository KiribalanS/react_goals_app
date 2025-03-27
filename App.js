import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'home'} component={Home}
                              options={{title: 'Welcome', headerShown: false}}/>
                <Stack.Screen name={'profile'} component={Profile}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
