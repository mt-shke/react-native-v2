import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { users } from "../../../../data";
import CustomButton from "../../../components/UI/CustomButton";
import CustomInput from "../../../components/UI/CustomInput";
import { colors, globalStyles } from "../../../globals";
import { ICredentials, IData } from "../../../ts/interfaces";
import { RootstackParamList } from "../../../ts/types";

const SignInForm: React.FC = (props) => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<RootstackParamList, "SignInScreen">
        >();

    const [credentials, setCredentials] = useState<ICredentials>({
        email: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState<string>("");

    const updateData = (data: IData) => {
        const inputId = Object.keys(data)[0];
        const inputValue = Object.values(data)[0];
        const newData = { ...credentials, [inputId]: inputValue };
        setCredentials(newData);
    };

    const checkUser = (credentials: ICredentials) => {
        const foundUser = users.find(
            (user) => user.email === credentials?.email.trim()
        );
        if (!foundUser) {
            // console.log(credentials.email);
            setErrorMessage("Email invalide");
            return;
        }

        const passwordsMatch =
            foundUser.password === credentials?.password.trim();
        if (!passwordsMatch) {
            // console.log(credentials.password);
            setErrorMessage("Mot de passe incorrect");
            return;
        }
    };

    return (
        <View style={styles.form}>
            <CustomInput
                inputId="email"
                type="email"
                label="Email"
                value={credentials.email}
                updateData={updateData}
                validationType="change"
            />
            <CustomInput
                inputId="password"
                type="password"
                label="Mot de passe"
                value={credentials.password}
                updateData={updateData}
                validationType="change"
            />
            <TouchableOpacity onPress={() => checkUser(credentials)}>
                <View style={styles.containerBtn}>
                    <CustomButton>Se connecter</CustomButton>
                </View>
            </TouchableOpacity>
            {errorMessage ? (
                <View style={styles.containerError}>
                    <Text style={styles.errorMsg}>{errorMessage}</Text>
                </View>
            ) : (
                <></>
            )}
        </View>
    );
};

export default SignInForm;

const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 14,
    },
    containerBtn: {
        width: 150,
        alignSelf: "center",
        marginTop: 40,
    },
    containerError: {
        position: "absolute",
        top: -60,
        alignSelf: "center",
    },
    errorMsg: {
        color: colors.orange,
        fontSize: globalStyles.fontSize,
    },
});
