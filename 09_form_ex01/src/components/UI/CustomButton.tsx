import { ReactNode } from "react";
import { Text, StyleSheet } from "react-native";
import { colors } from "../../globals";
import { globalStyles } from "../../globals/globalStyles";

interface ICustomButtonProps {
    color?: "white";
    children?: ReactNode;
}

const CustomButton: React.FC<ICustomButtonProps> = ({ color, children }) => {
    if (color === "white") {
        const whiteBtnStyle = {
            color: colors.black,
            backgroundColor: colors.background,
            borderWidth: 1,
            borderColor: colors.black,
        };
        return (
            <Text style={{ ...styles.btn, ...whiteBtnStyle }}>{children}</Text>
        );
    }

    return <Text style={styles.btn}>{children}</Text>;
};

export default CustomButton;

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.orange,
        color: colors.black,
        paddingVertical: 10,
        fontWeight: "bold",
        fontSize: globalStyles.fontSize,
        borderRadius: 20,
        marginBottom: 26,
        width: "100%",
        textAlign: "center",
    },
});
