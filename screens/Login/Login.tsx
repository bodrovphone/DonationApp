import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import style from './style';

const Login = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<any>;
  route: any;
}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom}>
          <Header text="Welcome Back" />
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
          <Button text="Login" />
        </View>
        <Pressable style={style.registrationButton}>
          <Header text="Don't have an account" type={3} color="#2979F2" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
