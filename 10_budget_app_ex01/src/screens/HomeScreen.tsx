import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeStackScreenParamList} from '../navigation/HomeStack';

export type HomeScreenProps = NativeStackScreenProps<
  HomeStackScreenParamList,
  'HomeScreen'
>;

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Pressable onPress={() => navigation.navigate('IncomeScreen')}>
          <View style={styles.button}>
            <Text style={styles.link}>Incomes</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('ExpenseScreen')}>
          <View style={styles.button}>
            <Text style={styles.link}>Expenses</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  navbar: {
    width: '100%',
    height: 70,
    paddingVertical: 20,
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'darkgrey',
  },
  button: {
    borderColor: 'grey',
  },
  link: {
    color: 'white',
    fontSize: 18,
  },
});
