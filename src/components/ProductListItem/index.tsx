import React from 'react';
import {StyleSheet, Text} from 'react-native';

export const ProductListItem = () => {
  return <Text style={styles.text}>Product List Item</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});
