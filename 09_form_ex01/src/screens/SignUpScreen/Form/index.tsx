import { View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import CustomButton from "../../../components/UI/CustomButton";
import CustomInput from "../../../components/UI/CustomInput";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../../globals";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SignUpStackParamList } from "../../../ts/types";
import SelectInputCivility from "../../../components/UI/SelectInputCivility";

const SignUpForm: React.FC = (props) => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<SignUpStackParamList, "SignUpScreen">
        >();
    return (
        <View style={styles.form}>
            <SelectInputCivility />
            <CustomInput
                inputId="email"
                type="email"
                label="Email"
                placeholder="Entre votre email"
            />
            <CustomInput
                inputId="password"
                type="password"
                label="Mot de passe"
                placeholder="Entre votre mot de passe"
            />
            <CustomInput
                inputId="password"
                type="password"
                label="Confirmation du mot de passe"
                placeholder="Entre votre mot de passe"
            />
            <View style={styles.containerBtn}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("SignUpEndScreen")}
                >
                    <CustomButton>
                        Suivant
                        <MaterialCommunityIcons
                            name="arrow-right-thin"
                            size={20}
                            color={colors.black}
                        />
                    </CustomButton>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SignUpForm;

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
