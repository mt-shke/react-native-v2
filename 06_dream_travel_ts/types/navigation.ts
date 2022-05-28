import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// STACKS

// export type VeryMain = CompositeScreenProps<
//     HomeScreenProps<keyof MainStackParamList>,
//     BottomTabStackProps<>
// >;

export type MainStackParamList = {
    HomeScreen: HomeScreenProps;
    BottomTabStack: BottomTabStackParamList;
};

export type BottomTabStackParamList = {
    ServicesScreen: ServicesScreenProps;
    CircuitsStack: CircuitsStackParamList;
    ContactScreen: ContactScreenProps;
};

export type CircuitsStackParamList = {
    CircuitsScreen: CircuitsScreenProps;
    DetailedCircuitScreen: DetailedCircuitScreenProps;
};

// SCREENS
// - from Mainstack

export type HomeScreenProps = NativeStackScreenProps<
    MainStackParamList,
    "HomeScreen"
>;

// - from BottomTabStack

export type ServicesScreenProps = NativeStackScreenProps<
    BottomTabStackParamList,
    "ServicesScreen"
>;

export type ContactScreenProps = NativeStackScreenProps<
    BottomTabStackParamList,
    "ContactScreen"
>;

// - from CircuitsStack

export type CircuitsScreenProps = NativeStackScreenProps<
    CircuitsStackParamList,
    "CircuitsScreen"
>;

export type DetailedCircuitScreenProps = NativeStackScreenProps<
    CircuitsStackParamList,
    "DetailedCircuitScreen"
>;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends MainStackParamList {}
    }
}
