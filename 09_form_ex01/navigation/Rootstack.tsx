import { View, Text, StyleSheet } from "react-native";

const Rootstack: React.FC = (props) => {
    return (
        <View style={styles.container}>
            <Text>Rootstack</Text>
        </View>
    );
};

export default Rootstack;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
