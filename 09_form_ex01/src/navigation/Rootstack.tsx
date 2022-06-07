import { NavigationContainer } from "@react-navigation/native";
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SignInScreen from "../screens/SignInScreen/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import { RootstackParamList } from "../ts/types";

const Stack = createNativeStackNavigator<RootstackParamList>();

const Rootstack: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen"
                defaultScreenOptions={screenOptions}
            >
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={screenOptions}
                />
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Rootstack;

const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
};
