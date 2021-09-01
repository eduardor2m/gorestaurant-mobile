import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dish } from '../screens/Dish';
import { Home } from '../screens/Home';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes() {
  return (
      <Navigator
        initialRouteName="Home"
      >
        <Screen 
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Screen 
          name="Dish"
          options={{headerShown: false}}
          component={Dish}
        />
      </Navigator>
  )
}