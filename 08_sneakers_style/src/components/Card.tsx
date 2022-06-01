import { View, Text, StyleSheet } from "react-native";
import { IProductProps } from "../interfaces";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import LikeBtn from "./LikeBtn";

const Card: React.FC<IProductProps> = ({ product }) => {
    return (
        <View style={styles.container}>
            <CardHeader product={product} />
            <CardBody product={product} />
            <CardFooter product={product} />
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: "48%",
        marginBottom: 14,
        aspectRatio: 3 / 5,
        borderWidth: 2,
        borderColor: "darkgrey",
    },
});
