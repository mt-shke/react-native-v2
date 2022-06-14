import React from 'react';
import {useForm} from 'react-hook-form';
import {View, StyleSheet, Button} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import Input from './Input';
import CustomSelectInput from './CustomSelectInput';
import {
  expensesCategory,
  expenseSchema,
  incomesCategory,
  incomeSchema,
} from '../schema/payment';
import DateInput from './DateInput';

export interface IFormProps {
  schema?: 'expense';
}

const Form: React.FC<IFormProps> = ({schema}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema === 'expense' ? expenseSchema : incomeSchema),
  });

  const onSubmit = data => console.log(data);

  const submitHandler = () => console.log(errors);

  return (
    <View style={styles.container}>
      <Input
        control={control}
        name="firstname"
        error={errors.firstname}
        key="firstname"
        label={'First Name'}
      />
      <Input
        control={control}
        name="lastname"
        error={errors.lastname}
        key="lastname"
        label={'Last Name'}
      />
      <Input
        control={control}
        name="amount"
        error={errors.amount}
        key="amount"
        label={'Amount'}
        keyboard="numeric"
      />
      <DateInput
        control={control}
        name="date"
        error={errors.date}
        key="date"
        label={'Date'}
      />
      <Input
        control={control}
        name="comments"
        error={errors.comments}
        key="comments"
        label={'Commentaire'}
      />

      <CustomSelectInput
        control={control}
        name="category"
        error={errors.category}
        key="category"
        label={'Category'}
        options={schema === 'expense' ? expensesCategory : incomesCategory}
      />

      <Button title="submit" onPress={submitHandler} />
      {/* <Button title="submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  containerInput: {},
  input: {
    backgroundColor: 'grey',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
  },
});
