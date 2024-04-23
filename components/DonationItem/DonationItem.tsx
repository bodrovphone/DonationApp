import React from 'react';

import {Image, View} from 'react-native';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import style from './style';

type Props = {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
};

const DonationItem = ({uri, badgeTitle, donationTitle, price}: Props) => {
  return (
    <View style={style.container}>
      <View>
        <View style={style.badge}>
          <Badge text={badgeTitle} />
        </View>
        <Image source={{uri: uri}} style={style.image} resizeMode="contain" />
      </View>
      <View style={style.donationInfo}>
        <Header text={donationTitle} type={3} color="#0A043C" />
        <View style={style.price}>
          <Header text={`$${price.toFixed(2)}`} type={3} color="#156CF7" />
        </View>
      </View>
    </View>
  );
};

export default DonationItem;
