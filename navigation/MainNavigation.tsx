import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';
import {Routes} from './Routes';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        header: () => null,
      }}
      initialRouteName={Routes.Login}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
      <Stack.Screen name={Routes.Login} component={Login} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
