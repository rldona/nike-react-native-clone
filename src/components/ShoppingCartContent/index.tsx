import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useShoppingCart} from '../../hooks/useShoppingCart';

import {H1} from '../H1';
import {Button} from '../Button';
import {EmptyResults} from '../EmptyResults';

export const ShoppingCartContent = () => {
  const {shoppingCart} = useShoppingCart();

  if (shoppingCart.length === 0) {
    return (
      <EmptyResults
        message={'Tu cesta está vacía. Cuando añadas productos aparecerán aquí'}
        buttonTitle={'Comprar ahora'}
        icon={'cart'}
      />
    );
  }

  return (
    <View style={styles.container}>
      <H1>Cesta</H1>
      <View style={styles.buttonContainer}>
        <Button>Pasar por caja</Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopWidth: 1,
    borderTopColor: '#DEDEDE',
    padding: 20,
  },
});
