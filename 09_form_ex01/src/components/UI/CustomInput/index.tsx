import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import validator from "validator";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors, globalStyles } from "../../../globals";
import { IData } from "../../../ts/interfaces";

interface ICustomInputProps {
    inputId: string;
    type?: "password" | "email" | "text";
    label: string;
    value: string;
    updateData: (data: IData) => void;
    validate?: (val: string, secondVal?: string) => boolean;
    validationType?: "change";
}

const CustomInput: React.FC<ICustomInputProps> = ({
    inputId,
    label,
    value,
    type,
    updateData,
    validate,
    validationType,
}) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isValueVisible, setIsValueVisible] = useState<boolean>(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (type === "password") {
            setIsValueVisible(false);
        }

        if (value.length) {
            setInputValue(value);
        }
    }, [error]);

    const onBlurHandler = () => {
        if (validationType === "change") {
            return;
        }
        updateData({ [inputId]: inputValue });
        if (validate) {
            setError((p) => !validate(inputValue));
        }
    };

    const onChangeHandler = (val: string) => {
        setInputValue(val);
        if (validationType === "change") {
            updateData({ [inputId]: val });
        }
    };

    return (
        <View style={styles.container}>
            <Text
                style={{
                    ...styles.label,
                    color: error ? colors.yellow : colors.black,
                }}
            >
                {label}
            </Text>
            <View style={styles.containerInput}>
                <TextInput
                    secureTextEntry={!isValueVisible}
                    onChangeText={onChangeHandler}
                    onBlur={onBlurHandler}
                    value={inputValue}
                    numberOfLines={1}
                    blurOnSubmit={true}
                    placeholder={
                        value?.length
                            ? value
                            : `Entrez votre ${label?.toLowerCase()}`
                    }
                    style={{
                        ...styles.input,
                        borderColor: error ? colors.brown : colors.black,
                        backgroundColor: error
                            ? colors.orange
                            : colors.background,
                    }}
                />
                {type === "password" && (
                    <Ionicons
                        onPress={() => setIsValueVisible((p) => !p)}
                        name={isValueVisible ? "eye-off" : "eye"}
                        color={colors.black}
                        size={globalStyles.fontSize}
                        style={styles.eye}
                    />
                )}
            </View>
        </View>
    );
};

export default CustomInput;

// interface IDateInputProps {
//     value:
// }

// const DateInput:React.FC = ( {value}) => {
//     <>
//     <Text
//     secureTextEntry={!isValueVisible}
//     onChangeText={(val: string) => setInputValue(val)}
//     onBlur={checkValue}
//     value={inputValue}
//     numberOfLines={1}
//     // blurOnSubmit={true}
//     placeholder={placeholder}
//     style={{
//         ...styles.input,
//         borderColor: error ? colors.brown : colors.black,
//         backgroundColor: error
//             ? colors.orange
//             : colors.background,
//     }}
// >{value}</Text>
// {type === "password" && (
//     <Ionicons
//         onPress={() => setIsValueVisible((p) => !p)}
//         name={isValueVisible ? "eye-off" : "eye"}
//         color={colors.black}
//         size={globalStyles.fontSize}
//         style={styles.eye}
//     />
//     </>

// )}

// }

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        marginBottom: 20,
    },
    label: {
        fontSize: globalStyles.fontSize,
        marginBottom: 8,
    },
    containerInput: {
        justifyContent: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
    eye: {
        position: "absolute",
        right: 0,
        padding: 12,
    },
});
