/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {createContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  // useColorScheme,
} from 'react-native';
import {colors} from './src/globals';

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import UserProvider from './src/state/UserContext';
import AuthNavigation from './src/navigation/AuthNavigation';

const App = () => {
  return (
    <UserProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={colors.blue}
        />
        <AuthNavigation />
      </SafeAreaView>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
});

export default App;
