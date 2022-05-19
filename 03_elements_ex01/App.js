import { StyleSheet } from "react-native";
import { ThemeProvider, createTheme } from "@rneui/themed";
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomHeader from "./components/CustomHeader";
import CustomListItem from "./components/CustomListItem";
import CustomSearchBar from "./components/CustomSearchBar";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <SafeAreaProvider style={styles.container}>
                <CustomHeader />
                <CustomSearchBar />
                <CustomListItem />
            </SafeAreaProvider>
        </ThemeProvider>
    );
}

const theme = createTheme({
    lightColors: {
        primary: "white",
    },
    darkColors: {
        primary: "grey",
    },
    // Button: {
    //     titleStyle: {
    //         color: "white",
    //     },
    // },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});
