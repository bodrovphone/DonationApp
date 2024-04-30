import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';

import {useDispatch} from 'react-redux';
import {loginUser} from '../../api/user';
import globalStyle from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import {Routes} from '../../navigation/Routes';
import {logIn} from '../../redux/reducers/user';
import style from './style';

const Login = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const dispatch = useDispatch();

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
        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        <View style={globalStyle.marginBottom}>
          <Button
            text="Login"
            isDisabled={email.length < 5 || password.length < 6}
            onPress={async () => {
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                dispatch(logIn(user.data));
                navigation.navigate(Routes.Home);
              }
            }}
          />
        </View>

        <Pressable
          style={style.registrationButton}
          onPress={() => {
            navigation.navigate('Registration');
          }}>
          <Header text="Don't have an account" type={3} color="#2979F2" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
