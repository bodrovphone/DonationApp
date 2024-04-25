import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
// import {resetToInitialState} from '../../redux/reducers/user';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import {updateSelectedCategoryId} from '../../redux/reducers/categories';
import {StoreData} from '../../redux/types';
import style from './style';

const Home = () => {
  const user = useSelector<StoreData, StoreData['user']>(state => state.user);
  const categories = useSelector<StoreData, StoreData['categories']>(
    state => state.categories,
  );

  const dispatch = useDispatch();
  //   dispatch(resetToInitialState());

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <View style={style.userName}>
              <Header text={`${user.firstName} ${user.lastName}.👋`} />
            </View>
          </View>
          <Image
            source={{uri: user.profilePictureUri}}
            style={style.profilePicture}
            resizeMode="contain"
          />
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode="contain"
            style={style.highlightedImage}
          />
        </Pressable>

        <View style={style.categoriesHeader}>
          <Header text="Select Category" />
        </View>
        <View style={style.categories}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories.categories}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.id}>
                <Tab
                  onPress={() => {
                    dispatch(updateSelectedCategoryId(item.id));
                  }}
                  id={item.id}
                  text={item.name}
                  isInactive={item.id !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
