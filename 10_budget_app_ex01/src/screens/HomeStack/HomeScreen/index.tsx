import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import Header from './header/Header';
import LandingView from './components/LandingView';
import UsersList from './components/UsersList';
import {colors} from '../../../globals';
import Transactions from './components/Transactions';
import ContainerButton from './components/ContainerButton';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.containerContent}>
          <LandingView />
          <UsersList />
          <ContainerButton />
        </View>
        <View style={{height: 20}} />
        <Transactions />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerContent: {
    padding: 20,
    marginHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 14,
    overflow: 'hidden',
  },
});
