import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ShoppingCartItem = () => {
  return (
    <View>
      <Text style={styles.text}>ShoppingCartItem</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 30,
    fontWeight: '400',
  },
});
