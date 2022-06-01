import { View, Text, StyleSheet, Image } from "react-native";
import { IProductProps } from "../interfaces";

const CardBody: React.FC<IProductProps> = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image source={product.photo} style={styles.img} />
            <View style={styles.containerText}>
                <Text style={styles.title}>{`${product.title}`}</Text>
                <Text
                    style={styles.desc}
                    ellipsizeMode={"tail"}
                >{`${product.desc}`}</Text>
            </View>
        </View>
    );
};

export default CardBody;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "80%",
        overflow: "hidden",
    },
    containerText: {
        width: "100%",
        alignItems: "flex-start",
    },
    img: {
        resizeMode: "contain",
        width: "100%",
        height: "55%",
        // position: "relative",
        // left: -40
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    desc: {
        fontSize: 14,
    },
});
