import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

import globalStyle from '../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton/BackButton';
import {StoreData} from '../../redux/types';
import style from './style';

const SingleDonationItem = ({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) => {
  const donationItemInfo = useSelector<
    StoreData,
    StoreData['donations']['selectedDonationInfo']
  >(state => state.donations.selectedDonationInfo);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={style.container}>
        <BackButton onBack={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
