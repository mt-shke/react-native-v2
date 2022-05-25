import { View, Text, Pressable } from "react-native";

const HomeScreen = (props) => {
    return (
        <View>
            <Text>Home</Text>
            <Pressable
                style={{ backgroundColor: "blue", width: 40, height: 40 }}
                onPress={() => props.navigation.navigate("BottomTabStack")}
            >
                <Text>Go</Text>
            </Pressable>
        </View>
    );
};

export default HomeScreen;
