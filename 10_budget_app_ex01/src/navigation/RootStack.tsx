import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import {colors} from '../globals';
import {screenOptions} from '../ts/types';
import HomeStack from './HomeStack';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import StatsScreen from '../screens/StatsScreen/StatsScreen';

export type RootStackParamsList = {
  HomeStack: undefined;
  AccountScreen: undefined;
  StatsScreen: undefined;
};

const Tab = createMaterialBottomTabNavigator<RootStackParamsList>();

const RootStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeStack"
        activeColor={colors.blue}
        inactiveColor={colors.grey}
        barStyle={styles.bottomTab}
        screenOptions={screenOptions}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <Ionicons
                // name={osIcon + "apps"}
                name={'home'}
                color={focused ? colors.blue : colors.grey}
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
                color={focused ? colors.blue : colors.grey}
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
                color={focused ? colors.blue : colors.grey}
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

const styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: colors.background,
  },
});
