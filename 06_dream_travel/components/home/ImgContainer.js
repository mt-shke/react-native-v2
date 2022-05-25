import { LinearGradient } from "expo-linear-gradient";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { colors } from "../../global/colors";

const ImgContainer = (props) => {
    const screen = Dimensions.get("screen");
    console.log(screen);

    return (
        // <View style={styles.containerImg}>
        <>
            <Image
                source={require("../../assets/home.jpg")}
                PlaceholderContent={"cruise"}
                style={styles.img}
            />
            <LinearGradient
                colors={["transparent", colors.black]}
                style={styles.overlay}
            />
        </>
        // </View>
    );
};

export default ImgContainer;

const styles = StyleSheet.create({
    containerImg: {
        position: "relative",
        height: 720,
        width: "100%",
    },
    img: {
        position: "absolute",
        width: "100%",
        height: 720,
        zIndex: 9,
        top: 0,
        left: 0,
        right: 0,
        resizeMode: "cover",
    },
    overlay: {
        position: "absolute",
        width: "100%",
        height: 320,
        zIndex: 10,
        top: 400,
        left: 0,
        right: 0,
    },
});
