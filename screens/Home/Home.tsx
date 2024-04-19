import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header text="Azzahri A." />
      <Header text="Azzahri A." type={2} />
      <Header text="Azzahri A." type={3} />
      <Text
        style={{
          fontSize: 70,
          fontFamily: 'Inter',
        }}>
        Hello I am donation app
      </Text>
    </SafeAreaView>
  );
};

export default Home;
