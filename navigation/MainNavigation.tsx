import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';
import SingleDonationItem from '../screens/SingleDonationItem/SingleDonationItem';
import {Routes} from './Routes';

const Stack = createStackNavigator();

const NonAuthenticatedNavigation = () => {
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
      <Stack.Screen name={Routes.Registration} component={Registration} />
    </Stack.Navigator>
  );
};

const AuthenticatedNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        header: () => null,
      }}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItem}
      />
    </Stack.Navigator>
  );
};

export {AuthenticatedNavigation, NonAuthenticatedNavigation};
