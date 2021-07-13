import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const ShoppingCartSummary = () => {
  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.subTotalText}>Subtotal</Text>
        <Text style={styles.subTotalText}>89,99 €</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subTotalText}>Envío</Text>
        <Text style={styles.subTotalText}>Estandar - Gratis</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>89,99 €</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subTotalText: {
    color: '#999',
    fontSize: 16,
    fontWeight: '400',
  },
  totalText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
  },
  row: {
    justifyContent: 'space-around',
  },
});
