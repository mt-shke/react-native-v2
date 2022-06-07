import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../globals";
import SignInForm from "./Form";
import NoAccount from "./NoAccount";

const SignInScreen: React.FC = (props) => {
    return (
        <View style={styles.container}>
            <Text>Img style to change</Text>
            <SignInForm />
            <NoAccount />
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
});
