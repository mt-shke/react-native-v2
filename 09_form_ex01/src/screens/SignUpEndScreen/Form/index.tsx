import { View, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from "../../../components/UI/CustomButton";
import CustomInput from "../../../components/UI/CustomInput";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootstackParamList, SignUpStackParamList } from "../../../ts/types";
import DateTimePicker from "../../../components/UI/CustomInput/DateTimePicker";
import DateInput from "../../../components/UI/CustomInput/DateInput";
import SelectInputCivility from "../../../components/UI/SelectInputCivility";
import useFormData from "../../../hooks/useFormData";
import { IData } from "../../../ts/interfaces";
import { useEffect, useState } from "react";

const SignUpEndForm: React.FC = (props) => {
    const navigation =
        useNavigation<
            NativeStackNavigationProp<RootstackParamList, "SignUpStack">
        >();
    const route =
        useRoute<RouteProp<SignUpStackParamList, "SignUpEndScreen">>();
    const data = route.params?.formData;
    // const {formData, setFormData} = useFormData()
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (!formData && data) {
            console.log("in cl");
            setFormData(data);
        }
    }, []);

    const updateData = (data: IData) => {
        const inputId = Object.keys(data)[0];
        const inputValue = Object.values(data)[0];
        const newData = { ...formData, [inputId]: inputValue };
        setFormData(newData);
    };

    return (
        <View style={styles.form}>
            <SelectInputCivility />
            <CustomInput
                inputId="firstname"
                label="Prénom"
                placeholder="Entrez votre prénom"
                updateData={updateData}
            />
            <CustomInput
                inputId="lastName"
                label="Nom"
                placeholder="Entrez votre nom"
                updateData={updateData}
            />

            <DateInput inputId="date" label="Date de naissance" />
            <View style={styles.containerBtn}>
                <TouchableOpacity
                    onPress={() => navigation.replace("SuccessScreen")}
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
