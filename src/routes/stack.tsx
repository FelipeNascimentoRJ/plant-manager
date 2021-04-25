import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from '../screens/welcome';
import IdentificationScreen from '../screens/indentification';
import ConfirmationScreen from '../screens/confirmation';
import PlantSelectScreen from '../screens/plant-select';
import PlantSaveScreen from '../screens/plant-save';

import colors from '../utils/colors';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="IdentificationScreen"
        component={IdentificationScreen}
      />
      <Stack.Screen
        name="ConfirmationScreen"
        component={ConfirmationScreen}
      />
      <Stack.Screen
        name="PlantSelectScreen"
        component={PlantSelectScreen}
      />
      <Stack.Screen
        name="PlantSaveScreen"
        component={PlantSaveScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
