import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../utils/colors';

import PlantSelectScreen from '../screens/plant-select';
import PlantSavedScreen from '../screens/plant-saved';

const Tab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.green,
        inactiveTintColor: colors.heading,
        labelPosition: 'beside-icon',
        style: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
    >
      <Tab.Screen
        name="Nova Planta"
        component={PlantSelectScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name="Minhas Plantas"
        component={PlantSavedScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthRoutes;