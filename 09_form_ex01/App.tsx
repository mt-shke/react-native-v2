import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { colors } from "./src/globals";
import Rootstack from "./src/navigation/Rootstack";

export default function App() {
    return (
        <SafeAreaProvider style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Rootstack />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
});
