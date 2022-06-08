import { View, StyleSheet } from "react-native";
import { colors } from "../../globals";
import SignUpEndForm from "./Form";

const SignUpEndScreen: React.FC = (props) => {
    return (
        <View style={styles.container}>
            <SignUpEndForm />
        </View>
    );
};

export default SignUpEndScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
    },
});
