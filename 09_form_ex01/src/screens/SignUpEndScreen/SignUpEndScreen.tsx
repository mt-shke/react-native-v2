import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../globals";
import { SignUpStackParamList } from "../../ts/types";
import SignUpEndForm from "./Form";

const SignUpEndScreen: React.FC = (props) => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<SignUpStackParamList, "SignUpEndScreen">
        >();

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
    },
});
