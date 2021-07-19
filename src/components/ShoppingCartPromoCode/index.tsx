import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ShoppingCartPromoCode = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿Tienes un código promocional?</Text>
      <Text style={styles.plus}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  plus: {
    color: '#000',
    fontSize: 20,
    fontWeight: '400',
  },
});
