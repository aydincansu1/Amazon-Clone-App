import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import PrimeLogo from '../assets/prime-logo.png';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Prod1 from '../assets/prod1.png';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {ProductData} from '../data/ProductData';
import {getRating} from '../utlis/halpers';
export default function ProductScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Resualts</Text>
        <Text style={styles.tagline}>
          Price and other details may vary based on product aside and color
        </Text>
        {ProductData.map(item => (
          <View style={styles.productSection}>
            <View style={styles.productImgSection}>
              <Image source={item.image} style={styles.productImg} />
            </View>
            <View style={styles.productDetailSection}>
              <Text style={styles.sposored}>Sponsor</Text>
              <Text style={styles.productName}>{item.productName}</Text>
              <View style={styles.row}>
                <Text style={styles.rating}>{item.rating}</Text>
                {getRating(item.rating)}
                <Text style={styles.ratingCount}>{item.ratingCount}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.price}>{item.price} $</Text>
                <Text style={styles.crossout}>{item.crossout}</Text>
              </View>
              <Text style={styles.cashback}>
                Up to 5% cashback with Amazon Pay Credit card
              </Text>
              <Image source={PrimeLogo} style={styles.logo} />
              <Text style={styles.cashback}>
                FREE Delivery by {item.deliveryBy}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {padding: 10},

  title: {fontSize: 18},

  tagline: {fontSize: 11, color: 'grey'},
  productSection: {
    borderColor: '#dddddd',
    borderWidth: 1,
    flexDirection: 'row',
    marginVertical: 15,
  },

  productImgSection: {
    width: '40%',
    backgroundColor: '#dddddd',
    justifyContent: 'center',
  },

  productImg: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },

  productDetailSection: {
    width: '60%',
    padding: 10,
  },

  sposored: {fontSize: 10, color: '#000000'},

  productName: {
    fontSize: 12,
    color: '#000000',
    lineHeight: 18,
  },
  logo: {
    height: 16,
    width: 42,
    marginVertical: 3,
  },
  rating: {
    fontSize: 10,
    color: '#017185',
    marginRight: 5,
  },
  ratingCount: {
    fontSize: 10,
    color: '#017185',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  price: {
    fontSize: 16,
    color: '#000000',
    marginRight: 5,
  },
  crossout: {
    fontSize: 10,
    color: 'grey',
    textDecorationLine: 'line-through',
  },
  cashback: {
    fontSize: 9,
    marginVertical: 3,
  },
});
