import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdaLovelaceScreen from "./screens/AdaLovelaceScreen";
import HomeScreen from "./screens/HomeScreen";
import BiographieScreen from "./screens/BiographieScreen";
import PersonnageScreen from "./screens/PersonnageScreen";

const screenOptions = {
    headerShown: false,
};

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    return (
        <Drawer.Navigator initialRouteName="Ada Lovelace">
            <Drawer.Screen name="Ada Lovelace" component={AdaLovelaceScreen} />
            <Drawer.Screen name="Personnage" component={PersonnageScreen} />
            <Drawer.Screen name="Biographie" component={BiographieScreen} />
        </Drawer.Navigator>
    );
};

const NavigationStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Accueil"
                useLegacyImplementation
                screenOptions={screenOptions}
            >
                <Stack.Screen name="Accueil" component={HomeScreen} />
                <Stack.Screen name="Drawer" component={DrawerStack} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationStack;
