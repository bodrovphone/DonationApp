import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';
import Tab from '../../components/Tab/Tab';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header text="Azzahri A." />
      <Tab text="Hello I am tab" />
      <Tab text="Hello I am tab" isInactive />
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
