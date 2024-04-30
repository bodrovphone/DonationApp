import React from 'react';
import {useSelector} from 'react-redux';
import {StoreData} from '../redux/types';
import {
  AuthenticatedNavigation,
  NonAuthenticatedNavigation,
} from './MainNavigation';

const RootNavigation = () => {
  const user = useSelector<StoreData, StoreData['user']>(state => state.user);

  return user.isLoggedIn ? (
    <AuthenticatedNavigation />
  ) : (
    <NonAuthenticatedNavigation />
  );
};

export default RootNavigation;
