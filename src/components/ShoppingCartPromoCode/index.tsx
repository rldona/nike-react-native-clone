import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ShoppingCartPromoCode = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿Tienes un código promocional?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    borderTopWidth: 1,
    borderTopColor: '#CCC',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  text: {
    color: '#000',
    fontSize: 18,
    fontWeight: '400',
    paddingLeft: 20,
  },
});
