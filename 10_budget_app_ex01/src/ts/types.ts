import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {HomeStackScreenParamList} from '../navigation/HomeStack';

export const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export type IHomeScreenProps = NativeStackScreenProps<
  HomeStackScreenParamList,
  'HomeScreen'
>;
