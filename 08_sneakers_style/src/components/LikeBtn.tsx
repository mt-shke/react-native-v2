import { View, Text, StyleSheet } from "react-native";
import { IProductProps } from "../interfaces";

interface ILikesBtnProps {
    likes: string;
}

const LikeBtn: React.FC<ILikesBtnProps> = ({ likes }) => {
    return (
        <View style={styles.container}>
            <Text>{`${likes} coeur`}</Text>
        </View>
    );
};

export default LikeBtn;

const styles = StyleSheet.create({
    container: {},
});
