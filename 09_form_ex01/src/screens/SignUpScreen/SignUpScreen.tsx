import { View, Text, StyleSheet } from "react-native";

const SignUpScreen: React.FC = (props) => {
    return (
        <View style={styles.container}>
            <Text>SignUpScreen</Text>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
