import { StyleSheet, ScrollView } from "react-native";
import { colors, randomArray } from "../global";
import CircuitCard from "../components/circuits/CircuitCard";
import { SearchBar } from "@rneui/themed";
import { ICircuit } from "../interface";
import { data } from "../data";

const CircuitsScreen: React.FC = (props) => {
    const circuitsData: ICircuit[] = data.circuits as ICircuit[];
    const newEntries: number[] = randomArray();

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
                    key={`${circuitsData[entry].country}${index}`}
                    circuit={circuitsData[entry]}
                />
            ))}
        </ScrollView>
    );
};

export default CircuitsScreen;

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
