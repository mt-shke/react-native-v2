import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Gap from '../../components/UI/Gap';
import {IUser} from '../../ts/interfaces/user';
import Chart from './chart/Chart';
import Contribution from './chart/Contribution';
import Pie from './chart/Pie';
import NavBar from './header/NavBar';

// const StatsScreen: React.FC<IUser> = ({user}) => {
const StatsScreen: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <NavBar />
        <Gap height={60} />
        <Chart user={user} />
        <Gap height={60} />
        {/* <LineChart /> */}
        <Pie user={user} />
        <Gap height={60} />
        {/* <Contribution /> */}
      </View>
    </ScrollView>
  );
};

export default StatsScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    paddingVertical: 10,
  },
});
