import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import style from './style';

const Registration = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: any;
}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom}>
          <Header text="Hello and Welcome!" />
        </View>
        <View style={globalStyle.marginBottom}>
          <Input
            label="First & Last Name"
            placeholder="Enter your full name..."
            onChangeText={setFullName}
          />
        </View>
        <View style={globalStyle.marginBottom}>
          <Input
            label="Email"
            placeholder="Enter your email..."
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
        <View style={globalStyle.marginBottom}>
          <Input
            label="Password"
            secureTextEntry
            placeholder="******"
            onChangeText={setPassword}
          />
        </View>
        <View style={globalStyle.marginBottom}>
          <Button text="Registration" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
