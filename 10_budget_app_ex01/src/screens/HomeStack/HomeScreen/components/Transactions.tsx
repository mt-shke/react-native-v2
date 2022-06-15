import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../../../../globals';

const Transactions: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions</Text>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.font,
  },
});
