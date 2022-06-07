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

export type SignInScreenProps = NativeStackScreenProps<
    RootstackParamList,
    "SignInScreen"
>;

export type SignUpScreenProps = NativeStackScreenProps<
    RootstackParamList,
    "SignUpScreen"
>;
