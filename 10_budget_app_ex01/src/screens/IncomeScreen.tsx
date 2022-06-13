import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const IncomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text>salaire </Text>
        <Text>revenu fina </Text>
        <Text>rente </Text>
        <Text>pension alimentaire </Text>
        <Text>allocation chom </Text>
        <Text>prestations soci </Text>
        <Text>revenu fonc </Text>
        <Text>revenu execptionnel </Text>
        <Text>autre revenu </Text>
      </View>
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
