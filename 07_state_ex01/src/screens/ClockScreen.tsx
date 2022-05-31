import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { RoostackParamList } from "../navigation/Rootstack";

type IClockScreenProps = NativeStackScreenProps<
    RoostackParamList,
    "ClockScreen"
>;

const ClockScreen: React.FC<IClockScreenProps> = ({ navigation }) => {
    const [date, setDate] = useState<null | string>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDate: string = new Date().toLocaleTimeString("fr-FR");
            setDate(newDate);
            console.log(newDate);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`${date ?? ""}`}</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("HomeScreen")}
            >
                <Text>To Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ClockScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 180,
        backgroundColor: "lightblue",
        width: "100%",
    },
    text: {
        fontWeight: "bold",
        fontSize: 24,
        alignSelf: "center",
    },
    btn: {
        marginTop: 200,
        padding: 20,
        backgroundColor: "orange",
    },
});
