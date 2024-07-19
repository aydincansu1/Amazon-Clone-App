import React from 'react';
import Header from '../components/Header';
import {ScrollView} from 'react-native';
import SubHeader from '../components/SubHeader';
import Category from '../components/Category';
import Carusel from '../components/Carusel';
import Services from '../components/Services';
import Deals from '../components/Deals';
import Brands from '../components/Brands';

export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <SubHeader />
      <Category />
      <Carusel />
      <Services />
      <Deals />
      <Brands />
    </ScrollView>
  );
}
