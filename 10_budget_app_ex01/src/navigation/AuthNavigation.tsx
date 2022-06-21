import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {UserContext} from '../state/UserContext';
import {IUserData} from '../ts/interfaces/user';
import RootStack from './RootStack';

const AuthNavigation: React.FC = () => {
  const {state: user, dispatch} = useContext(UserContext);

  useEffect(() => {
    if (!user.user) {
      dispatch({type: 'SET_RANDOM_USER'});
    }
  }, []);

  if (!user.user) {
    return (
      <View>
        <Text>Loading a random user...</Text>
      </View>
    );
  }

  return <RootStack />;
};

export default AuthNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
