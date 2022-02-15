import React, { useEffect, useState } from 'react';

import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import AppNavigation from './AppNavigation';
import { Provider } from 'react-redux';
import { Store, Persistor } from './src/redux';
import Toast from 'react-native-toast-message';
import { Colors } from './src/config';
import { PersistGate } from 'redux-persist/integration/react';
// import store from './src/redux/createStore';
//  import SplashScreen from 'react-native-splash-screen';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: Colors.white,
  };

  //  SplashScreen.hide();
  return (
    <SafeAreaView style={backgroundStyle}>
      <Provider store={Store}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor="#fff"
        />
        {Platform.OS == 'ios' ? (
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <AppNavigation />
          </KeyboardAvoidingView>
        ) : (
          <AppNavigation />
        )}
        <Toast ref={ref => Toast.setRef(ref)} />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
