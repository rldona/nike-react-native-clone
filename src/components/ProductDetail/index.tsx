import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const ProductDetail = () => {
  return <Text style={styles.text}>Product Detail</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: '400',
    paddingLeft: 20,
    paddingBottom: 15,
  },
});
