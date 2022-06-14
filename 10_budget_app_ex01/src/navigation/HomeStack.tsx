import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ExpenseScreen from '../screens/ExpenseScreen';
import HomeScreen from '../screens/HomeScreen';
import IncomeScreen from '../screens/IncomeScreen';
import {screenOptions} from '../ts/types';
import React from 'react';

export type HomeStackScreenParamList = {
  HomeScreen: undefined;
  IncomeScreen: undefined;
  ExpenseScreen: undefined;
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
