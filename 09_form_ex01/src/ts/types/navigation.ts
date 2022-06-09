import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IFormData, IFormDataSignUpEndScreen } from "../interfaces";

// STACKS

export type RootstackParamList = {
    HomeScreen: undefined;
    SignInScreen: undefined;
    SignUpStack: undefined;
    SuccessScreen: undefined;
};

export type SignUpStackParamList = {
    SignUpScreen: { formData?: IFormData };
    SignUpEndScreen: { formData: IFormDataSignUpEndScreen };
};

// SCREENS Props

export type HomeScreenProps = NativeStackScreenProps<
    RootstackParamList,
    "HomeScreen"
>;

export type SignInScreenProps = NativeStackScreenProps<
    RootstackParamList,
    "SignInScreen"
>;

export type SignUpScreenProps = NativeStackScreenProps<
    SignUpStackParamList,
    "SignUpScreen"
>;

export type SignUpEndScreenProps = NativeStackScreenProps<
    SignUpStackParamList,
    "SignUpEndScreen"
>;

export type SuccessScreenProps = NativeStackScreenProps<
    RootstackParamList,
    "SuccessScreen"
>;
