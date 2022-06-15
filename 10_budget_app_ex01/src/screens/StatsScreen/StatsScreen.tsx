import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StatsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>StatsScreen</Text>
    </View>
  );
};

export default StatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
