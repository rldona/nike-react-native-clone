import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {ProductListItem} from '../ProductListItem';

export const ProductList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product List</Text>
      <ProductListItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#000',
    borderWidth: 2,
  },
  text: {
    color: '#000',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
});
