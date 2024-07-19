import {View, Text, StyleSheet, Image} from 'react-native';
import Recomended from '../assets/recommend.jpg';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Deals() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you</Text>
      <Image style={styles.imgStyle} source={Recomended} />
      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offDeal}>%18 off</Text>
          </TouchableOpacity>
          <Text style={styles.deal}>Deal</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.discountPrice}>1,599 $</Text>
          <Text style={styles.actualPrice}>M.R.P 1800$</Text>
        </View>
        <Text style={styles.productName}>
          Nykaa Face Wash Gentle Skin Cleanser for all skin type
        </Text>

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.allDeals}>See all deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {marginTop: 20},
  imgStyle: {height: 250, width: '100%', marginVertical: 10},
  title: {
    fontSize: 18,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: '#000000',
  },
  offDealBtn: {
    backgroundColor: 'tomato',
    width: 60,
    padding: 5,
    borderRadius: 5,
  },
  offDeal: {fontSize: 13, color: '#ffff'},
  deal: {
    color: 'tomato',
    fontWeight: '600',
    marginLeft: 6,
    fontSize: 12,
  },
  bottomSection: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountPrice: {
    color: '#000000',
    fontSize: 16,
    marginVertical: 5,
  },
  actualPrice: {
    fontSize: 10,
    marginLeft: 10,
    textDecorationLine: 'line-through',
  },
  productName: {
    color: '#000000',
    fontSize: 14,
  },
  allDeals: {
    color: '#017185',
    fontSize: 14,
    marginVertical: 10,
  },
});
