import React from 'react';
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import Router from './src/navigation/Router';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#9ee4d4'} barStyle={'dark-content'} />
      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
