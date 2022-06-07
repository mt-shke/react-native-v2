import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../globals";
import Footer from "./Footer";
import Header from "./Header";

const HomeScreen: React.FC = (props) => {
    return (
        <View style={styles.container}>
            <Header />
            <Footer />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
});
