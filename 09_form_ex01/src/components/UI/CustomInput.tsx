import { useState } from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    TextInputFocusEventData,
    NativeSyntheticEvent,
} from "react-native";
import { colors } from "../../globals";
import { globalStyles } from "../../globals/globalStyles";
import validator from "validator";

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

    const checkValue = () => {
        if (inputId === "email" && validator.isEmail(inputValue)) {
            setError(false);
        }
        if (inputId === "email" && !validator.isEmail(inputValue)) {
            setError(true);
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
            </View>
        </View>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
    },
    label: {
        fontSize: globalStyles.fontSize,
        marginBottom: 8,
    },
    containerInput: {},
    input: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 12,
    },
});
