import React from 'react';
import {StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/dist/Feather';

import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
export default function SubHeader() {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#bbe8ef', '#bbeee9', '#c3f1e3']}>
      <Feather name="map-pin" size={22} color={'#000000'} />
      <Text style={styles.deliver}>Delive to Turkey - 234234</Text>
      <SimpleLineIcons name="arrow-down" color={'#000000'} size={10} />
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliver: {
    fontSize: 13,
    color: '#2c4341',
    paddingHorizontal: 6,
  },
});
