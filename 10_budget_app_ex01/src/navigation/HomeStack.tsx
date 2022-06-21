import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screens/HomeStack/HomeScreen';
import IncomeScreen from '../screens/HomeStack/IncomeScreen';
import ExpenseScreen from '../screens/HomeStack/ExpenseScreen';
import {IUserData} from '../ts/interfaces/user';
import {screenOptions} from '../globals';

// Using Route params
// export type HomeStackScreenParamList = {
//   HomeScreen: undefined{user: IUserData};
//   IncomeScreen: {user: IUserData};
//   ExpenseScreen: {user: IUserData};
// };

export type HomeStackScreenParamList = {
  HomeScreen: undefined;
  IncomeScreen: undefined;
  ExpenseScreen: undefined;
};

export type HomeStackPropsType =
  NativeStackScreenProps<HomeStackScreenParamList>;

const Stack = createNativeStackNavigator<HomeStackScreenParamList>();

const HomeStack: React.FC<HomeStackPropsType> = ({navigation, route}) => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="IncomeScreen" component={IncomeScreen} />
      <Stack.Screen name="ExpenseScreen" component={ExpenseScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
