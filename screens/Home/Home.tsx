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
import {
  resetCategories,
  updateSelectedCategoryId,
} from '../../redux/reducers/categories';
import {Category, StoreData} from '../../redux/types';
import style from './style';

const Home = () => {
  const user = useSelector<StoreData, StoreData['user']>(state => state.user);
  const categories = useSelector<StoreData, StoreData['categories']>(
    state => state.categories,
  );

  const dispatch = useDispatch();
  //   React.useEffect(() => {
  //     dispatch(resetToInitialState());
  //   }, []);

  const [categoryPage, setCategoryPage] = React.useState(1);
  const [categoryList, setCategoryList] = React.useState<Category[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const categoryListPerPage = 4;

  const paginateCategoryList = (
    items: Category[],
    pageNumber: number,
    pageSize: number,
  ) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if (startIndex < 0 || endIndex > items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };

  React.useEffect(() => {
    setIsLoading(true);
    setCategoryList(
      paginateCategoryList(
        categories.categories,
        categoryPage,
        categoryListPerPage,
      ),
    );
    setCategoryPage(p => p + 1);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            data={categoryList}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoading) {
                return;
              }
              setIsLoading(true);
              let newData = paginateCategoryList(
                categories.categories,
                categoryPage,
                categoryListPerPage,
              );

              if (newData.length > 0) {
                setCategoryList([...categoryList, ...newData]);
                setCategoryPage(p => p + 1);
              }
              setIsLoading(false);
            }}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.id}>
                <Tab
                  onPress={() => {
                    if (categories.selectedCategoryId !== item.id) {
                      dispatch(updateSelectedCategoryId(item.id));
                    } else {
                      dispatch(resetCategories());
                    }
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
