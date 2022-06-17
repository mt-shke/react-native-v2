import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Form from '../../../components/Form';
import {HomeStackScreenParamList} from '../../../navigation/HomeStack';

export type IncomeScreenPropsType = NativeStackScreenProps<
  HomeStackScreenParamList,
  'IncomeScreen'
>;

const IncomeScreen: React.FC<IncomeScreenPropsType> = ({navigation, route}) => {
  const user = route.params.user;

  const submitForm = (data: any) => {
    // Can do better
    const randomId = Math.round(
      Math.random() * 1524625663654155241 + 1000000000000,
    ).toString();
    const newPayment = {
      ...data,
      amount: data.amount.toString(),
      _id_income: randomId,
    };
    const updatedUser = {
      ...user,
      incomes: [newPayment, ...user.incomes],
    };
    navigation.navigate('HomeScreen', {
      user: updatedUser,
    });
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
