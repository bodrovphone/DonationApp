import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home/Home';
import {Routes} from './Routes';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        header: () => null,
      }}>
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
