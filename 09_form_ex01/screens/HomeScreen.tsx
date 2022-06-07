import { View, Text, StyleSheet } from "react-native";

const HomeScreen: React.FC = (props) => {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
