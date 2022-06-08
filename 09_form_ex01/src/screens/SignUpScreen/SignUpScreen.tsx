import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../globals";
import SignUpForm from "./Form";

const SignUpScreen: React.FC = (props) => {
    return (
        <View style={styles.container}>
            <SignUpForm />
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
});
