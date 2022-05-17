import { StyleSheet, Image, Text, SafeAreaView } from "react-native";
// import imgPortrait from "../assets/portrait.jpg";

const AdaLovelaceScreen = (props) => {
    return (
        <SafeAreaView style={styles.main}>
            <Image
                style={styles.img}
                source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped.png/260px-Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped.png",
                }}
            />
            <Text style={styles.text}>Ada LOVELACE</Text>
        </SafeAreaView>
    );
};

export default AdaLovelaceScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    img: {
        width: 260,
        height: 300,
        alignSelf: "center",
        margin: 50,
    },
    text: {
        alignSelf: "center",
        fontSize: 24,
    },
});
