import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  totalPrice: string;
}

export const ShoppingCartSummary = ({totalPrice}: Props) => {
  return (
    <>
      <View style={styles.row}>
        <Text style={styles.subTotalText}>Subtotal</Text>
        <Text style={styles.subTotalText}>{totalPrice} €</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subTotalText}>Envío</Text>
        <Text style={styles.subTotalText}>Estándar - Gratis</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>{totalPrice} €</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  subTotalText: {
    color: '#999',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
  },
  totalText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 22,
  },
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
