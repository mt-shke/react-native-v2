import { View, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../../../components/UI/CustomButton";
import CustomInput from "../../../components/UI/CustomInput";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../../globals";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SignUpStackParamList } from "../../../ts/types";
import CustomDateInput from "../../../components/UI/DateInput";
import DateTimePicker from "../../../components/UI/DateTimePicker";

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
                placeholder="Entrez votre prénom"
            />
            <CustomInput
                inputId="lastName"
                label="Nom"
                placeholder="Entrez votre nom"
            />
            {/* <CustomInput
                inputId="birthdate"
                label="Date de naissance"
                placeholder="Entrez votre date de naissance"
            /> */}
            {/* <CustomDateInput />  */}
            <DateTimePicker />
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
