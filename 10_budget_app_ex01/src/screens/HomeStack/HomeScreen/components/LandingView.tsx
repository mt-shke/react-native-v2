import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {colors} from '../../../../globals';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RouteProp, useRoute} from '@react-navigation/native';
import {HomeStackScreenParamList} from '../../../../navigation/HomeStack';
import {IUser} from '../../../../ts/interfaces/user';

interface ILandingViewProps {
  user: IUser;
}

const LandingView: React.FC<ILandingViewProps> = ({user}) => {
  console.log(user);

  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.containerHeader}>
          <Text>Available balance</Text>
          <Text style={styles.price}>$16 485</Text>
        </View>
        <Image
          style={styles.flag}
          source={require('../../../../../assets/img/usa_flag.png')}
        />
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.containerBottomText}>
          <Text>See More</Text>
          <View style={styles.containerArrow}>
            <MaterialIcons
              style={styles.arrow}
              name={'keyboard-arrow-right'}
              color={colors.blue}
              size={20}
            />
          </View>
        </View>
        <View style={styles.containerBottomText}>
          <Text>US Dollar</Text>
          <View style={styles.containerArrow}>
            <MaterialIcons
              style={styles.arrow}
              name={'keyboard-arrow-down'}
              color={colors.blue}
              size={20}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default LandingView;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerHeader: {},
  containerBottom: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerBottomText: {
    flexDirection: 'row',
  },
  containerArrow: {
    backgroundColor: colors.lightblue,
    borderRadius: 50,
    marginHorizontal: 6,
  },
  arrow: {},
  price: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  flag: {
    width: 48,
    height: 48,
    padding: 20,
  },
});
