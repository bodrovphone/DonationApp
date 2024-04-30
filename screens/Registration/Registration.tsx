import {NavigationProp} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import {createUser} from '../../api/user';
import globalStyle from '../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton/BackButton';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import style from './style';

const Registration = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton onBack={() => navigation.goBack()} />
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
        {error.length > 0 && <Text style={style.error}>{error}</Text>}

        {success && (
          <Text style={style.success}>Congrats! You have scfly signed up!</Text>
        )}
        <View style={globalStyle.marginBottom}>
          <Button
            text="Registration"
            onPress={async () => {
              const user = await createUser(fullName, email, password);
              if ('error' in user) {
                setError(user.error);
              } else {
                setError('');
                setSuccess(true);
                setTimeout(() => {
                  navigation.goBack();
                }, 3000);
              }
            }}
            isDisabled={
              email.length <= 5 || password.length <= 6 || fullName.length <= 2
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
