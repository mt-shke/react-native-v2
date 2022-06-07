import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../../components/UI/CustomButton";
import CustomInput from "../../../components/UI/CustomInput";

const SignInForm: React.FC = (props) => {
    return (
        <View style={styles.form}>
            <CustomInput
                inputId="email"
                label="Email"
                placeholder="Entre votre email"
            />
            <CustomInput
                inputId="password"
                label="Mot de passe"
                placeholder="Entre votre mot de passe"
            />
            <View style={styles.containerBtn}>
                <CustomButton>Se connecter</CustomButton>
            </View>
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
});
