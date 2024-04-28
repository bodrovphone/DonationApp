import React from 'react';
import {KeyboardTypeOptions, Text, TextInput, View} from 'react-native';
import style from './style';

type Props = {
  label: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
};

const Input = ({
  label,
  placeholder,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
}: Props) => {
  const [value, setValue] = React.useState('');

  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={v => {
          setValue(v);
          onChangeText?.(v);
        }}
        placeholder={placeholder}
        style={style.input}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
