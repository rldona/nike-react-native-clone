import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ShoppingCartPromoCode = () => {
  return (
    <View>
      <Text style={styles.text}>ShoppingCartPromoCode</Text>
    </View>
  );
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
