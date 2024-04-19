import React from 'react';

import {Text, View} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';
import style from './style';

type Props = {
  text: string;
};

const Badge = ({text = ''}: Props) => {
  const [width, setWidth] = React.useState(0);
  const textRef = React.useRef<Text>(null);
  const paddingHorizontal = 10;

  const tabWidth = {
    width: horizontalScale(width + paddingHorizontal * 2),
  };

  return (
    <View style={[style.badge, tabWidth]}>
      <Text
        style={[style.text]}
        ref={textRef}
        onTextLayout={ev => {
          setWidth(ev.nativeEvent.lines[0].width);
        }}>
        {text}
      </Text>
    </View>
  );
};

export default Badge;
