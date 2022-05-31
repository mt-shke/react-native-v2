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
            <View style={styles.containerBtn}>
                <Pressable style={styles.btn} onPress={() => viewHandler()}>
                    <Text>{isVisible ? "Hide" : "Show"}</Text>
                </Pressable>
            </View>
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
    containerBtn: {
        marginVertical: 20,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 200,
        width: "100%",
    },
    btn: {
        alignSelf: "center",
        backgroundColor: "orange",
        color: "white",
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 6,
    },
});
