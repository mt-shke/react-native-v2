import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import Form from '../../../components/Form';
import {HomeStackScreenParamList} from '../../../navigation/HomeStack';
import {UserContext} from '../../../state/UserContext';
import {getRandomId} from '../../../utils';

export type IncomeScreenPropsType = NativeStackScreenProps<
  HomeStackScreenParamList,
  'IncomeScreen'
>;

// Testing with route params
// const IncomeScreen: React.FC<IncomeScreenPropsType> = ({navigation, route}) => {
//   const user = route.params.user;

const IncomeScreen: React.FC<IncomeScreenPropsType> = ({navigation, route}) => {
  const {state: user, dispatch} = useContext(UserContext);

  const submitForm = (data: any) => {
    // Props route way - Can do better
    // const newId = getRandomId();
    // const newPayment = {
    //   ...data,
    //   amount: data.amount.toString(),
    //   _id_income: newId,
    // };
    // const updatedUser = {
    //   ...user,
    //   incomes: [newPayment, ...user.incomes],
    // };
    dispatch({type: 'USER_ADD_INCOME', payload: {income: data}});
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Form submitForm={submitForm} />
    </View>
  );
};

export default IncomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
  },
});
