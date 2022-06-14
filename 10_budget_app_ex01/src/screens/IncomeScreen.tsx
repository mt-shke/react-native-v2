import React from 'react';
import {View, StyleSheet} from 'react-native';
import Form from '../components/Form';

const IncomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Form />
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
