import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {colors} from '../../../../globals';
import {HomeStackScreenParamList} from '../../../../navigation/HomeStack';

const LandingViewLink: React.FC = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<HomeStackScreenParamList, 'HomeScreen'>
    >();

  return (
    <View style={styles.navbar}>
      <Pressable onPress={() => navigation.navigate('IncomeScreen')}>
        <View style={styles.button}>
          <Text style={styles.link}>Add income</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('ExpenseScreen')}>
        <View style={styles.button}>
          <Text style={styles.link}>Add expense</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default LandingViewLink;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {},
  link: {
    color: colors.font,
    fontSize: 16,
  },
});
