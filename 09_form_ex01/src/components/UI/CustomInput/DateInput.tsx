import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { colors, globalStyles } from "../../../globals";

interface ICustomSelectInputProps {
    inputId: string;
    label?: string;
    options: string[];
    placeholder?: string;
}

const CustomSelectInput: React.FC<ICustomSelectInputProps> = ({
    inputId,
    label,
    options,
    placeholder,
}) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        // if (placeholder) {
        //     setInputValue(placeholder);
        // }
    }, []);

    const checkValue = () => {};

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
                <Pressable onPress={() => setModal((p) => !p)}>
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
                    <MaterialIcons
                        name={"arrow-drop-down"}
                        color={colors.black}
                        size={globalStyles.fontSize}
                        style={styles.eye}
                    />
                </Pressable>
                {modal && (
                    <SelectOptionsModal
                        options={options}
                        setModal={setModal}
                        setValue={setInputValue}
                    />
                )}
            </View>
        </View>
    );
};

export default CustomSelectInput;

interface ISelectOptionsModal {
    options: string[];
    setValue: (option: string) => void;
    setModal: (boolean: boolean) => void;
}

const SelectOptionsModal: React.FC<ISelectOptionsModal> = ({
    options,
    setValue,
    setModal,
}) => {
    const pickValue = (option: string) => {
        setValue(option);
        setModal(false);
    };

    return (
        <View style={styles.containerModal}>
            {options.map((option, index) => (
                <Pressable onPress={() => pickValue(option)} key={index}>
                    <View
                        style={{
                            ...styles.select,
                            borderTopWidth: index === 0 ? 1 : 0,
                        }}
                    >
                        <Text style={styles.selectText}>{option}</Text>
                    </View>
                </Pressable>
            ))}
        </View>
    );
};

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
    },
    input: {
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    eye: {
        position: "absolute",
        right: 0,
        padding: 12,
    },

    // Modal
    containerModal: {
        position: "absolute",
        width: "100%",
        top: 0,
        zIndex: 11,
        backgroundColor: colors.background,
    },
    select: {
        borderColor: colors.black,
        borderWidth: 1,
    },
    selectText: {
        padding: 10,
    },
});
