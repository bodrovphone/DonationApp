import React from 'react';

import {GestureResponderEvent, Pressable, Text} from 'react-native';
import style from './style';

type Props = {
  text: string;
  isDisabled?: boolean;
  onPress?: ((e: GestureResponderEvent) => void) | (() => void);
};

const Button = ({text = '', isDisabled = false, onPress}: Props) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={[style.button, isDisabled && style.disabled]}
      onPress={onPress}>
      <Text style={style.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;
