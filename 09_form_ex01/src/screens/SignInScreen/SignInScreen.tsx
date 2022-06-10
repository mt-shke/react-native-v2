import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { colors } from "../../globals";
import SignInForm from "./Form";
import NoAccount from "./NoAccount";

const SignInScreen: React.FC = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require("../../../assets/img/bg-orange.jpg")}
                resizeMode="cover"
                style={styles.bgContainer}
            >
                <View style={styles.containerImg}>
                    <ImageBackground
                        source={require("../../../assets/img/people.webp")}
                        resizeMode="cover"
                        style={styles.image}
                    ></ImageBackground>
                    <LinearGradient
                        style={styles.overlay}
                        // where the gradient starts and ends
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0.65 }}
                        // set the array of colors of the gradient
                        // colors={["transparent", "transparent"]}
                        colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
                        // where each colors start
                        locations={[0, 1]}
                    ></LinearGradient>
                </View>

                <SignInForm />
                <NoAccount />
            </ImageBackground>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.background,
        backgroundColor: "grey",
        justifyContent: "flex-start",
    },
    bgContainer: {
        flex: 1,
    },
    overlay: {
        height: "100%",
        width: "100%",
        position: "absolute",
        zIndex: 2,
        backgroundColor: "transparent",
    },
    containerImg: {
        height: 300,
        width: "100%",
        marginBottom: 40,
        backgroundColor: colors.transparent,
        position: "relative",
        // overflow: "hidden",
    },
    image: {
        // height: 300,
        // marginBottom: 40,
        height: "100%",
        width: "100%",
        // position: "absolute",
        backgroundColor: "transparent",
        opacity: 1,
        // overflow: "hidden",
    },
    // image: {
    //     height: "100%",
    //     width: "100%",
    //     // position: "absolute",
    // },
    // overlay: {
    //     height: 300,
    //     marginBottom: 40,
    //     // overflow: "hidden",
    // },
});
