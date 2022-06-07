import { View, Text, StyleSheet } from "react-native";

const SignInScreen: React.FC = (props) => {
    return (
        <View style={styles.container}>
            <Text>SignInScreen</Text>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
