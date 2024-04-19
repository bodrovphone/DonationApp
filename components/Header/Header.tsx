import React from 'react';

import {Text, View} from 'react-native';
import style from './style';

type Props = {
  text: string;
  type?: 1 | 2 | 3;
};

const Header = ({text = '', type = 1}: Props) => {
  const styleKey = `title${type}` as keyof typeof style;
  return (
    <View>
      <Text style={style[styleKey]}>{text}</Text>
    </View>
  );
};

export default Header;
