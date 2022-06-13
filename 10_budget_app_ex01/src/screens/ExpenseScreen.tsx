import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ExpenseScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text>alime </Text>
        <Text>factur </Text>
        <Text>transport </Text>
        <Text>logement </Text>
        <Text>sante</Text>
        <Text>divertiss</Text>
        <Text>vacances</Text>
        <Text>shopping</Text>
        <Text>autres</Text>
      </View>
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
