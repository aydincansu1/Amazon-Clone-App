import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Brans1 from '../assets/brand1.jpeg';
import Brans2 from '../assets/brand2.jpeg';
import Brans3 from '../assets/brand3.jpeg';
import Brans4 from '../assets/brand4.jpeg';
export default function Brands() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}> Brands of the day</Text>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brans1} />
            <Text style={styles.brandTitle}>
              Min. 40% off | Fossil, Titan Smart Watch & More
            </Text>
          </View>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brans2} />
            <Text style={styles.brandTitle}>
              Min. 40% off | Fossil, Titan Smart Watch & More
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brans3} />
            <Text style={styles.brandTitle}>
              Min. 40% off | Fossil, Titan Smart Watch & More
            </Text>
          </View>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brans4} />
            <Text style={styles.brandTitle}>
              Min. 40% off | Fossil, Titan Smart Watch & More
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontWeight: 'bold',
    color: '#000000',
  },
  container: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
  innerContainer: {},
  row: {flexDirection: 'row'},
  brands: {
    width: '50%',
    padding: 10,
  },
  imgStyle: {height: 150, width: '100%'},
  brandTitle: {
    color: '#000000',
    fontSize: 12,
    marginTop: 4,
  },
});
