/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
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
import RootStack from './src/navigation/RootStack';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: 'black',
  //   flex: 1,
  // };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.blue}
      />
      <RootStack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
});

export default App;
