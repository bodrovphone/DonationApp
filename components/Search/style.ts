import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  input: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: 'Inter',
    fontSize: verticalScale(14),
    lineHeight: verticalScale(14),
  },
  container: {
    borderRadius: horizontalScale(15),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#F3F5F9',
    height: verticalScale(50),
  },
});

export default style;
