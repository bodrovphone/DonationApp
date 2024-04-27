import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
  },
  badge: {
    marginBottom: verticalScale(16),
  },
  description: {
    marginTop: verticalScale(7),
    marginHorizontal: verticalScale(7),
    fontFamily: 'Inter',
    fontWeight: '400',
    lineHeight: verticalScale(14),
    marginBottom: verticalScale(10),
  },
  button: {
    marginHorizontal: horizontalScale(20),
  },
});

export default style;
