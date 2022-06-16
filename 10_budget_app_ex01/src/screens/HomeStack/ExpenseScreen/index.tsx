import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Form from '../../../components/Form';
import {HomeStackScreenParamList} from '../../../navigation/HomeStack';

export type ExpenseScreenPropsType = NativeStackScreenProps<
  HomeStackScreenParamList,
  'ExpenseScreen'
>;

const ExpenseScreen: React.FC<ExpenseScreenPropsType> = ({
  navigation,
  route,
}) => {
  const user = route.params.user;

  const submitForm = (data: any) => {
    console.log(data);
    // navigation.navigate('HomeScreen', )
  };

  return (
    <View style={styles.container}>
      <Form schema="expense" submitForm={submitForm} />
    </View>
  );
};

export default ExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
  },
});
