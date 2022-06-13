import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import AccountScreen from '../screens/AccountScreen';
import StatsScreen from '../screens/StatsScreen';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import AntDesign from 'react-native-vector-icons/AntDesign';

export type RootStackParamsList = {
  HomeScreen: undefined;
  AccountScreen: undefined;
  StatsScreen: undefined;
};

// const Tab = createNativeStackNavigator<RootStackParamsList>();
const Tab = createMaterialBottomTabNavigator<RootStackParamsList>();

const RootStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        activeColor={'white'}
        inactiveColor={'grey'}
        barStyle={{backgroundColor: 'black'}}
        screenOptions={screenOptions}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <Ionicons
                // name={osIcon + "apps"}
                name={'home'}
                color={focused ? 'white' : 'grey'}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({focused}) => (
              <AntDesign
                // name={osIcon + "airplane"}
                name={'profile'}
                color={focused ? 'white' : 'grey'}
                size={20}
              />
            ),
          }}
        />
        <Tab.Screen
          name="StatsScreen"
          component={StatsScreen}
          options={{
            tabBarLabel: 'Stats',
            tabBarIcon: ({focused}) => (
              <Ionicons
                // name={osIcon + "customerservice"}
                name={'stats-chart'}
                color={focused ? 'white' : 'grey'}
                size={20}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default RootStack;

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
