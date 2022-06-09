import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors, globalStyles } from "../../globals";
import { IData } from "../../ts/interfaces";
import DateTimePicker from "./CustomInput/DateTimePicker";

interface IDateInputProps {
    inputId: string;
    label?: string;
    value: string;
    updateData: (val: IData) => void;
}

const DateInput: React.FC<IDateInputProps> = ({
    inputId,
    label,
    value,
    updateData,
}) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        if (value.length) {
            setInputValue(value);
        }
    }, []);

    const setValueHandler = (val: string) => {
        setInputValue(val);
        updateData({ [inputId]: val });
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
                <Text
                    // onBlur={checkValue}
                    // value={inputValue}
                    numberOfLines={1}
                    ellipsizeMode={"tail"}
                    style={{
                        ...styles.input,
                        borderColor: error ? colors.brown : colors.black,
                        backgroundColor: error
                            ? colors.orange
                            : colors.background,
                    }}
                >
                    {inputValue}
                </Text>
                <DateTimePicker setValue={setValueHandler} />
            </View>
        </View>
    );
};

export default DateInput;

const styles = StyleSheet.create({
    // Select Input
    container: {
        marginBottom: 20,
    },
    label: {
        fontSize: globalStyles.fontSize,
        marginBottom: 8,
    },
    containerInput: {
        position: "relative",
        // justifyContent: "flex-end",
    },
    input: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    icon: {
        position: "absolute",
        right: 0,
        padding: 12,
    },
});
