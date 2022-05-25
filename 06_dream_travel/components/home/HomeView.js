import { ScrollView, StyleSheet } from "react-native";
import { colors } from "../../global/colors";
import ImgContainer from "./ImgContainer";
import AboutUsContainer from "./AboutUsContainer";
import LandingTextContainer from "./LandingTextContainer";
import { useRef } from "react";

const HomeView = ({ navigation }) => {
    const aboutRef = useRef();

    return (
        <ScrollView style={styles.container}>
            <ImgContainer />
            <LandingTextContainer navigation={navigation} aboutRef={aboutRef} />
            <AboutUsContainer aboutRef={aboutRef} />
        </ScrollView>
    );
};

export default HomeView;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        position: "relative",
    },
});
