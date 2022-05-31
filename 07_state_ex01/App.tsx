import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Clock from "./src/components/Clock";

export default function App() {
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const viewHandler = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <View style={styles.container}>
            {isVisible && <Clock />}
            <Pressable style={styles.btn} onPress={() => viewHandler()}>
                <Text>{isVisible ? "Hide" : "Show"}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 6,
        alignSelf: "center",
        backgroundColor: "lightblue",
        borderRadius: 12,
    },
});
