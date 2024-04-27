import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import globalStyle from '../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import {StoreData} from '../../redux/types';
import style from './style';

const SingleDonationItem = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: any;
}) => {
  const donationItemInfo = useSelector<
    StoreData,
    StoreData['donations']['selectedDonationInfo']
  >(state => state.donations.selectedDonationInfo);

  const categoryInformation = route.params.categoryInformation;
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={style.container}>
        <BackButton onBack={() => navigation.goBack()} />
        <Image source={{uri: donationItemInfo.image}} style={style.image} />
        <View style={style.badge}>
          <Badge text={categoryInformation.name} />
        </View>
        <Header text={donationItemInfo.name} />
        <Text style={style.description}>
          {donationItemInfo.description}

          {donationItemInfo.description}
          {donationItemInfo.description}
          {donationItemInfo.description}
          {donationItemInfo.description}
          {donationItemInfo.description}
          {donationItemInfo.description}
          {donationItemInfo.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button text="Donate" onPress={() => navigation.navigate('Payment')} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
