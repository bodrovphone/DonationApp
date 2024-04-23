import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import {updateFirstName} from '../../redux/reducers/user';
import {StoreData} from '../../redux/types';
const Home = () => {
  const user = useSelector<StoreData, StoreData['user']>(state => state.user);

  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header text={`${user.firstName} ${user.lastName}`} />
      <Pressable onPress={() => dispatch(updateFirstName({firstName: 'N'}))}>
        <Text>Press me 🔥</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
