import React from 'react';
import {SafeAreaView, View} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import {horizontalScale} from '../../assets/styles/scaling';
import DonationItem from '../../components/DonationItem/DonationItem';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: horizontalScale(14),
        }}>
        <DonationItem
          uri="https://via.assets.so/movie.png?id=1&q=95&w=155&h=170&fit=fill"
          badgeTitle="Environment"
          donationTitle="Save the Amazon Rainforest"
          price={100}
        />
        <DonationItem
          uri="https://via.assets.so/movie.png?id=1&q=95&w=155&h=170&fit=fill"
          badgeTitle="Environment"
          donationTitle="Save the Amazon Rainforest"
          price={100}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
