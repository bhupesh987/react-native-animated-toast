import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: animated => ({
    height: 60,
    left: (width * 0.05) / 2,
    top: animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 50],
    }),
    opacity: animated.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    backgroundColor: '#bbbbbb',
    width: width * 0.95,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 25,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 5,
    position: 'absolute',
    bottom: '45%',
  }),
  icon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  messageText: {
    fontSize: 12,
    color: '#000',
  },
});

export default styles;
