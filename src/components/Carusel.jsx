import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {CarouselData} from '../data/CarouselData';

export default function Carusel() {
  return (
    <View>
      <Swiper autoplay={true} showsPagination={false} style={styles.wrapper}>
        {CarouselData.map(item => (
          <View key={item.id}>
            <Image source={item.image} style={styles.imgStyle} />
          </View>
        ))}
      </Swiper>
    </View>
  );
}
const styles = StyleSheet.create({
  imgStyle: {
    height: 250,
    width: '100%',
  },

  wrapper: {
    height: 300,
  },
});
