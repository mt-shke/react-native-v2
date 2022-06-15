import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {colors} from '../../../../globals';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerAvatar}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://i.pravatar.cc/' + Math.ceil(Math.random() * 100),
          }}
        />
      </View>

      <Ionicons
        // name={osIcon + "customerservice"}
        name={'stats-chart'}
        color={colors.grey}
        size={20}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    height: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  containerAvatar: {},
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
});
