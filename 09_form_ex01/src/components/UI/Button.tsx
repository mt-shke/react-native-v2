import { Text, StyleSheet } from "react-native";
import { colors } from "../../globals";

interface IButtonProps {
    color?: "white";
}

const Button: React.FC<IButtonProps> = ({ color, children }) => {
    if (color === "white") {
        const whiteBtnStyle = {
            color: colors.black,
            backgroundColor: colors.background,
            borderWidth: 1,
            borderColor: colors.black,
        };
        return (
            <Text
                style={{ ...styles.btn, ...whiteBtnStyle }}
            >{`${children}`}</Text>
        );
    }

    return <Text style={styles.btn}>{`${children}`}</Text>;
};

export default Button;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.orange,
        color: colors.black,
        alignSelf: "center",
        paddingVertical: 10,
        paddingHorizontal: 24,
        fontWeight: "bold",
        fontSize: 18,
        borderRadius: 20,
        marginBottom: 30,
    },
});
