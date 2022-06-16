import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenOptions} from '../ts/types';
import React from 'react';
import HomeScreen from '../screens/HomeStack/HomeScreen';
import IncomeScreen from '../screens/HomeStack/IncomeScreen';
import ExpenseScreen from '../screens/HomeStack/ExpenseScreen';
import {IUserData} from '../ts/interfaces/user';

export type HomeStackScreenParamList = {
  HomeScreen: undefined | {user: IUserData};
  IncomeScreen: {user: IUserData};
  ExpenseScreen: {user: IUserData};
};

const Stack = createNativeStackNavigator<HomeStackScreenParamList>();

const HomeStack: React.FC = () => {
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
