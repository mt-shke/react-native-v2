import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, ScrollView } from "react-native";
import data from "../data.json";
import { colors, randomArray } from "../global";
import CircuitCard from "../components/circuits/CircuitCard";
import DetailedCircuit from "../components/circuits/detailedCircuit/DetailedCircuit";
import { SearchBar } from "@rneui/themed";
import { color } from "@rneui/base";

const Stack = createNativeStackNavigator();

const CircuitsScreenStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="circuits"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="circuits" component={CircuitsScreen} />
            <Stack.Screen
                name="detailed-circuit"
                component={DetailedCircuitScreen}
            />
        </Stack.Navigator>
    );
};

export default CircuitsScreenStack;

const CircuitsScreen = (props) => {
    const circuitsData = data[0].circuits;
    const newEntries = randomArray();
    console.log(circuitsData);

    return (
        <ScrollView style={styles.container}>
            <SearchBar
                containerStyle={styles.containerSearchBar}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
                leftIconContainerStyle={styles.leftIconContainerStyle}
                placeholder="Destination"
                clearIcon={false}
            />
            {newEntries.map((entry, index) => (
                <CircuitCard
                    key={`${entry.country}${index}`}
                    circuit={circuitsData[entry]}
                />
            ))}
        </ScrollView>
    );
};

const DetailedCircuitScreen = ({ route }) => {
    return (
        <ScrollView style={styles.container}>
            <DetailedCircuit route={route} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        borderWidth: 0,
    },
    containerSearchBar: {
        backgroundColor: colors.black,
        marginBottom: 6,
        borderTopColor: "transparent",
    },
    inputStyle: {
        paddingHorizontal: 14,
    },
    leftIconContainerStyle: {
        position: "absolute",
        right: 12,
    },
    inputContainerStyle: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.bgGrey,
        backgroundColor: colors.black,
        borderBottomWidth: 1,
        marginVertical: 10,
        zIndex: 10,
    },
});
