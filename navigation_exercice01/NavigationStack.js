import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ImgScreen from "./screens/ImgScreen";
import TextScreen from "./screens/TextScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const screenOptions = {
    headerShown: false,
};

// const Stack = createNativeStackNavigator();

// const NavigationStack = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen
//                     name="ImgScreen"
//                     component={ImgScreen}
//                     screenOptions={{ headerShown: false }}
//                 />
//                 <Stack.Screen name="TextScreen" component={TextScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

const Tab = createBottomTabNavigator();

const NavigationStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="ImgScreen"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === "ImgScreen") {
                            iconName = focused ? "ios-image" : "ios-image";
                        } else if (route.name === "TextScreen") {
                            iconName = focused ? "ios-list" : "ios-list";
                        }

                        return (
                            <Ionicons name={iconName} size={24} color={color} />
                        );
                    },
                    tabBarActiveTintColor: "darkgreen",
                    tabBarInactiveTintColor: "lightgray",
                })}
            >
                <Tab.Screen
                    name="ImgScreen"
                    component={ImgScreen}
                    options={screenOptions}
                />
                <Tab.Screen
                    name="TextScreen"
                    component={TextScreen}
                    options={screenOptions}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default NavigationStack;
