import React from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';

import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import {StoreData} from '../../redux/types';

const Home = () => {
  const user = useSelector<StoreData, StoreData['user']>(state => state.user);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header text={`${user.firstName} ${user.lastName}`} />
    </SafeAreaView>
  );
};

export default Home;
