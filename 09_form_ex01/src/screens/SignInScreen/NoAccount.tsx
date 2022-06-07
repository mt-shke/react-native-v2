import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../../globals";
import { RootstackParamList, SignInScreenProps } from "../../ts/types";

const NoAccount: React.FC = (props) => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<RootstackParamList, "SignInScreen">
        >();

    return (
        <View style={styles.container}>
            <Text>Pas encore inscrit ? </Text>
            <Pressable onPress={() => navigation.navigate("SignUpScreen")}>
                <Text style={styles.link}>Créer un compte</Text>
            </Pressable>
        </View>
    );
};

export default NoAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },

    link: {
        color: colors.yellow,
    },
});
