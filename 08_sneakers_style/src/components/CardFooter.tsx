import { View, Text, StyleSheet } from "react-native";
import { IProductProps } from "../interfaces";
import LikeBtn from "./LikeBtn";

const CardFooter: React.FC<IProductProps> = ({ product }) => {
    return (
        <View style={styles.container}>
            <Text>{`${product.size}`}</Text>
            <LikeBtn likes={product.likes} />
        </View>
    );
};

export default CardFooter;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },
});
