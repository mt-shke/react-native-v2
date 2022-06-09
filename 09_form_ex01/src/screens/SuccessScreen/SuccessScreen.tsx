import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import { RootstackParamList } from "../../ts/types";

const SuccessScreen: React.FC = ({}) => {
    const route = useRoute<RouteProp<RootstackParamList, "SuccessScreen">>();

    const { firstname, lastname, birthDate, civility, email } =
        route.params.formData;

    return (
        <View style={styles.container}>
            <Text>SUCCESS!!</Text>
            <Text>{`Welcome ${
                civility + " " + firstname + " " + lastname
            }`}</Text>
            <Text>{`Your birth date is ${birthDate}`}</Text>
            <Text>{`Your email is ${email}`}</Text>
        </View>
    );
};

export default SuccessScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
