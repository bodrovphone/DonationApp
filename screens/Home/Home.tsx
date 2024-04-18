import React from 'react';

import {SafeAreaView, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
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
