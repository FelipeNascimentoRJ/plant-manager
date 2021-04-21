import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';

// import WelcomeScreen from './src/screens/welcome';
import IdentificationScreen from './src/screens/indentification';

const App = () => {
  const [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <IdentificationScreen />;
};

export default App;
