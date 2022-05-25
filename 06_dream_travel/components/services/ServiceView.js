import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";
import { colors } from "../../global/colors";
import { globalStyles } from "../../global/globalStyles";

const ServiceView = ({ name, content }) => {
    const path = `../../assets/${name.toLowerCase()}.jpg`;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.containerImg}>
                <Image
                    source={require("../../assets/leisure.jpg")}
                    PlaceholderContent={"cruise"}
                    style={styles.img}
                />
                {/* <View style={styles.overlay} /> */}
                <LinearGradient
                    // Background Linear Gradient
                    colors={["transparent", colors.black]}
                    style={styles.overlay}
                />
            </View>
            <View style={styles.containerText}>
                <Text style={globalStyles.bigTitle}>{`${name} Travel`}</Text>
                <Text style={globalStyles.paragraph}>{`${content}`}</Text>
            </View>
        </ScrollView>
    );
};
export default ServiceView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    containerImg: {
        position: "relative",
        height: 620,
        width: "100%",
    },
    img: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "lightblue",
        zIndex: 9,
    },
    overlay: {
        position: "absolute",
        width: "100%",
        height: "50%",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    containerText: {
        position: "relative",
        top: -200,
        paddingHorizontal: 10,
        zIndex: 11,
    },
});
