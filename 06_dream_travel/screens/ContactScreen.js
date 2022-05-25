import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../global/colors";

const ContactScreen = (props) => {
    const navigation = useNavigation();

    const goHome = () => {
        navigation.navigate("HomeScreen");
    };

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.img}
                    source={require("../assets/contact-island.jpg")}
                />
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.text}>Contact</Text>
                <Text style={styles.text}>Contact</Text>
            </View>
            <Text>Contact</Text>
            <TouchableOpacity
                style={{ padding: 10, backgroundColor: "blue" }}
                onPress={goHome}
            >
                <Text>Go Home</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ContactScreen;

const styles = StyleSheet.create({
    container: { backgroundColor: colors.black, flex: 1 },
    img: {
        width: "100%",
    },
    headerContainer: {
        alignItems: "center",
    },
    text: {
        color: colors.white,
    },
});
