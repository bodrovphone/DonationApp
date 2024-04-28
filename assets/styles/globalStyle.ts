import {StyleSheet} from 'react-native';
import {verticalScale} from './scaling';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: 'white',
  },
  flex: {
    flex: 1,
  },
  marginBottom: {
    marginBottom: verticalScale(24),
  },
});

export default globalStyle;
