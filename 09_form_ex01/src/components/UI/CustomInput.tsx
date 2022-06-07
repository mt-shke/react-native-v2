import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { colors } from "../../globals";
import { globalStyles } from "../../globals/globalStyles";
import validator from "validator";
import Ionicons from "react-native-vector-icons/Ionicons";

interface ICustomInputProps {
    inputId: string;
    label?: string;
    placeholder?: string;
}

const CustomInput: React.FC<ICustomInputProps> = ({
    inputId,
    label,
    placeholder,
}) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [isValueVisible, setIsValueVisible] = useState<boolean>(true);

    useEffect(() => {
        if (inputId === "password") {
            setIsValueVisible(false);
        }
    }, []);

    const checkValue = () => {
        // Check if input is email
        if (inputId === "email") {
            if (!validator.isEmail(inputValue)) {
                setError(true);
                return;
            }
            setError(false);
        }

        // Check length
        validator.isLength(inputValue, { min: 6, max: 40 })
            ? setError(false)
            : setError(true);
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
                    onChangeText={(val: string) => setInputValue(val)}
                    onBlur={checkValue}
                    value={inputValue}
                    numberOfLines={1}
                    // blurOnSubmit={true}
                    placeholder={placeholder}
                    style={{
                        ...styles.input,
                        borderColor: error ? colors.brown : colors.black,
                        backgroundColor: error
                            ? colors.orange
                            : colors.background,
                    }}
                />
                {inputId === "password" && (
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
