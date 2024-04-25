import React from 'react';

import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Pressable, TextInput} from 'react-native';
import style from './style';

type Props = {
  query?: string;
  placeholder?: string;
};

const Search = ({query = '', placeholder}: Props) => {
  const [queryString, setQueryString] = React.useState(query);
  const inputRef = React.useRef<TextInput>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <Pressable style={style.container} onPress={handleFocus}>
      <FontAwesomeIcon icon={faSearch} color="#25C0FF" size={22} />
      <TextInput
        placeholder={placeholder || 'Search'}
        value={queryString}
        onChange={e => setQueryString(e.nativeEvent.text)}
        style={style.input}
        ref={inputRef}
      />
    </Pressable>
  );
};

export default Search;
