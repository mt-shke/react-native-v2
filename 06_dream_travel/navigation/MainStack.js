import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import BottomTabStack from "./BottomTabStack";

const Stack = createNativeStackNavigator();

const MainStack = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShow: false }}
                />
                <Stack.Screen
                    name="BottomTabStack"
                    component={BottomTabStack}
                    options={{ headerShow: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainStack;
