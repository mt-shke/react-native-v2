import { View, Text, StyleSheet } from "react-native";

const SuccessScreen: React.FC = (props) => {
    return (
        <View style={styles.container}>
            <Text>SuccessScreen</Text>
        </View>
    );
};

export default SuccessScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
