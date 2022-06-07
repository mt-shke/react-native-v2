import { View, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../../../components/UI/CustomButton";
import CustomInput from "../../../components/UI/CustomInput";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../../globals";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SignUpStackParamList } from "../../../ts/types";

const SignUpEndForm: React.FC = (props) => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<SignUpStackParamList, "SignUpScreen">
        >();
    return (
        <View style={styles.form}>
            <CustomInput
                inputId="firstname"
                label="Prénom"
                placeholder="Entre votre prénom"
            />
            <CustomInput
                inputId="lastName"
                label="Nom"
                placeholder="Entre votre nom"
            />
            <CustomInput
                inputId="birthdate"
                label="Date de naissance"
                placeholder="Entre votre date de naissance"
            />
            <View style={styles.containerBtn}>
                <TouchableOpacity
                // onPress={() => navigation.navigate("SignUpEndScreen")}
                >
                    <CustomButton>Terminer</CustomButton>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignUpEndForm;

const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 14,
    },
    containerBtn: {
        width: 150,
        alignSelf: "center",
        marginTop: 40,
    },
});
