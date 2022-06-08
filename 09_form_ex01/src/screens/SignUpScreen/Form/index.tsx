import { View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import CustomButton from "../../../components/UI/CustomButton";
import CustomInput from "../../../components/UI/CustomInput";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../../globals";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SignUpStackParamList } from "../../../ts/types";
import SelectInputCivility from "../../../components/UI/SelectInputCivility";
import { useEffect, useState } from "react";
import { IData, IFormData } from "../../../ts/interfaces";

const SignUpForm: React.FC = (props) => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<SignUpStackParamList, "SignUpScreen">
        >();

    const [formData, setFormData] = useState<IFormData>({});

    const updateData = (data: IData) => {
        const inputId = Object.keys(data)[0];
        const inputValue = Object.values(data)[0];
        const newData = { ...formData, [inputId]: inputValue };
        setFormData(newData);
    };

    const noError =
        formData["email"] &&
        formData["password"] &&
        formData["passwordConfirmation"] &&
        formData["password"] === formData["passwordConfirmation"];

    console.log(formData);

    useEffect(() => {}, [formData]);

    return (
        <View style={styles.form}>
            <CustomInput
                inputId="email"
                type="email"
                label="Email"
                placeholder="Entre votre email"
                updateData={updateData}
            />
            <CustomInput
                inputId="password"
                type="password"
                label="Mot de passe"
                placeholder="Entre votre mot de passe"
                updateData={updateData}
            />
            <CustomInput
                inputId="passwordConfirmation"
                type="password"
                label="Confirmation du mot de passe"
                placeholder="Entre votre mot de passe"
                updateData={updateData}
            />
            <View style={styles.containerBtn}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("SignUpEndScreen", { formData })
                    }
                >
                    {noError && (
                        <CustomButton>
                            Suivant
                            <MaterialCommunityIcons
                                name="arrow-right-thin"
                                size={20}
                                color={colors.black}
                            />
                        </CustomButton>
                    )}
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
