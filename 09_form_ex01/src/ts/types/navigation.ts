import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootstackParamList = {
    HomeScreen: undefined;
    SignInScreen: undefined;
    SignUpScreen: undefined;
};

// SCREENS

export type HomeScreenProps = NativeStackScreenProps<
    RootstackParamList,
    "HomeScreen"
>;
