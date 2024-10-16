import {StyleSheet} from 'react-native';

export const shadowStyle = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2}, // Increased height for a stronger bottom shadow
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5,
  },
});
