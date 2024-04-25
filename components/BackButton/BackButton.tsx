import React from 'react';

import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Pressable} from 'react-native';
import style from './style';

type Props = {
  onBack?: () => void;
};

const BackButton = ({onBack}: Props) => {
  return (
    <Pressable onPress={onBack} style={style.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

export default BackButton;
