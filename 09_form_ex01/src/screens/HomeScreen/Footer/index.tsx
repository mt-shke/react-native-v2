import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CustomButton from "../../../components/UI/CustomButton";
import { globalStyles } from "../../../globals";
import { RootstackParamList } from "../../../ts/types";

const Footer: React.FC = (props) => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<RootstackParamList, "HomeScreen">
        >();

    return (
        <View style={styles.container}>
            <View style={styles.containerBtn}>
                <Text style={styles.welcome} numberOfLines={1}>
                    Welcome friend!
                </Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate("SignInScreen")}
                >
                    <CustomButton>Se connecter</CustomButton>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SignUpStack")}
                >
                    <CustomButton color="white">S'inscrire</CustomButton>
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
        width: 200,
        alignSelf: "center",
    },
    welcome: {
        fontFamily: globalStyles.fontBangers,
        fontSize: 28,
        letterSpacing: 8,
    },
});
