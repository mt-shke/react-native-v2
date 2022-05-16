import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Accueil from "./screens/Accueil";

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
};

const NavigationStack = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Accueil"
                    component={Accueil}
                    screenOptions={screenOptions}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationStack;
