import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Platform } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../global/colors";
import CircuitScreen from "../screens/CircuitScreen";
import ContactScreen from "../screens/ContactScreen";
import ServicesScreen from "../screens/ServicesScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomTabStack = (props) => {
    const osIcon = Platform.OS === "ios" ? "ios-" : "";

    return (
        <Tab.Navigator
            initialRouteName="CircuitScreen"
            activeColor={colors.blue}
            inactiveColor={colors.bgGrey}
            barStyle={{ backgroundColor: colors.black }}
            screenOptions={{ headerShow: false }}
        >
            <Tab.Screen
                name="ServicesScreen"
                component={ServicesScreen}
                options={{
                    tabBarLabel: "Services",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={osIcon + "apps"}
                            color={focused ? colors.blue : colors.bgGrey}
                            size={24}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="CircuitScreen"
                component={CircuitScreen}
                options={{
                    tabBarLabel: "Circuit",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={osIcon + "airplane"}
                            color={focused ? colors.blue : colors.bgGrey}
                            size={24}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="ContactScreen"
                component={ContactScreen}
                options={{
                    tabBarLabel: "Contact",
                    tabBarIcon: ({ focused, color }) => (
                        <AntDesign
                            name={osIcon + "customerservice"}
                            color={focused ? colors.blue : colors.bgGrey}
                            size={24}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabStack;
