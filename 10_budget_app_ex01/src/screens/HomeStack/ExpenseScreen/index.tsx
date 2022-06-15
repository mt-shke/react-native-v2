import React from 'react';
import {View, StyleSheet} from 'react-native';
import Form from '../../../components/Form';

const ExpenseScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Form schema="expense" />
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
