import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../../../components/UI/Button";
import { RootstackParamList } from "../../../ts/types";

const Footer: React.FC = (props) => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<RootstackParamList, "HomeScreen">
        >();

    return (
        <View style={styles.container}>
            <View style={styles.containerBtn}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SignInScreen")}
                >
                    <Button>Se connecter</Button>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SignUpScreen")}
                >
                    <Button color="white">S'inscrire</Button>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    containerBtn: {
        marginTop: 50,
    },
});
