import { View, Text, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../globals";

interface ILikesBtnProps {
    likes: string;
}

const LikeBtn: React.FC<ILikesBtnProps> = ({ likes }) => {
    return (
        <View style={styles.container}>
            <Text>
                {`${likes ?? ""} `}
                <AntDesign name="heart" color={colors.blue} size={12} />
            </Text>
        </View>
    );
};

export default LikeBtn;

const styles = StyleSheet.create({
    container: {},
});
