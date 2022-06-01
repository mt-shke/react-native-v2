import { View, Text, ImageBackground } from "react-native";

// Testing ImageBackground component
const BackImg: React.FC = (props) => {
    const imgUrl = "https://source.unsplash.com/random/900×700/?";
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: imgUrl }}
                resizeMode="cover"
                style={styles.image}
            >
                <Text style={styles.text}>BackImg</Text>
            </ImageBackground>
        </View>
    );
};

export default BackImg;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { flex: 1, width: "100%" },
    image: {
        flex: 1,
    },
    text: {
        fontSize: 60,
        padding: 10,
        backgroundColor: "transparent",
        fontWeight: "bold",
    },
});
