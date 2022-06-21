import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import Form from '../../../components/Form';
import {HomeStackScreenParamList} from '../../../navigation/HomeStack';
import {UserContext} from '../../../state/UserContext';

export type ExpenseScreenPropsType = NativeStackScreenProps<
  HomeStackScreenParamList,
  'ExpenseScreen'
>;

// Testing with route params
// const ExpenseScreen: React.FC<ExpenseScreenPropsType> = ({
//   navigation,
//   route,
// }) => {
//   const user = route.params.user;

const ExpenseScreen: React.FC<ExpenseScreenPropsType> = ({
  navigation,
  route,
}) => {
  const {state, dispatch} = useContext(UserContext);

  const submitForm = (data: any) => {
    dispatch({type: 'USER_ADD_EXPENSE', payload: {expense: data}});
    navigation.navigate('HomeScreen');
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
