import React from 'react';

import {GestureResponderEvent, Pressable, Text} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';
import style from './style';

type Props = {
  text: string;
  isInactive?: boolean;
  onPress?: ((e: GestureResponderEvent) => void) | (() => void);
};

const Tab = ({text = '', isInactive = false, onPress}: Props) => {
  const [width, setWidth] = React.useState(0);
  const textRef = React.useRef<Text>(null);
  const paddingHorizontal = 33;

  const tabWidth = {
    width: horizontalScale(width + paddingHorizontal * 2),
  };

  return (
    <Pressable
      disabled={isInactive}
      style={[style.tab, isInactive && style.inactiveTab, tabWidth]}
      onPress={onPress}>
      <Text
        style={[style.text, isInactive && style.inactiveText]}
        ref={textRef}
        onTextLayout={ev => {
          setWidth(ev.nativeEvent.lines[0].width);
        }}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Tab;
