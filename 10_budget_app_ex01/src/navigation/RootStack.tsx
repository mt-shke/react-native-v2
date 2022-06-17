import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  NavigationContainer,
  RouteProp,
  useRoute,
} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import {colors} from '../globals';
import {screenOptions} from '../ts/types';
import HomeStack, {HomeStackScreenParamList} from './HomeStack';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import StatsScreen from '../screens/StatsScreen/StatsScreen';
import {IUserData} from '../ts/interfaces/user';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamsList = {
  HomeStack: undefined | {user: IUserData};
  AccountScreen: {user: IUserData};
  StatsScreen: {user: IUserData};
};

const Tab = createMaterialBottomTabNavigator();

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

const RootStack: React.FC = ({}) => {
  // const user = useRoute<RouteProp<HomeStackProps>>().params?.user
  // const userHomeStack =
  //   useRoute<RouteProp<RootStackParamsList, 'HomeStack'>>().params?.user;
  // const userAccountScreen =
  //   useRoute<RouteProp<RootStackParamsList, 'AccountScreen'>>().params.user;
  // const userStatsScreen =
  //   useRoute<RouteProp<RootStackParamsList, 'StatsScreen'>>().params.user;

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
          // initialParams={homeParams}
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
          // initialParams={{user: userAccountScreen}}
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
          // initialParams={{user: userStatsScreen}}
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
