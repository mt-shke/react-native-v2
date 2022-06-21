import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../../navigation/RootStack';
import {HomeStackScreenParamList} from '../../navigation/HomeStack';

export type HomeStackProps = NativeStackScreenProps<
  RootStackParamsList,
  'HomeStack'
>;
export type AccountScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'AccountScreen'
>;
export type StatsScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'StatsScreen'
>;

export type IHomeScreenProps = NativeStackScreenProps<
  HomeStackScreenParamList,
  'HomeScreen'
>;
