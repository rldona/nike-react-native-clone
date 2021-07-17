import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {useShoppingCart} from '../../hooks/useShoppingCart';

import {H1} from '../H1';
import {Button} from '../Button';
import {EmptyResults} from '../EmptyResults';
import {ShoppingCartPromoCode} from '../ShoppingCartPromoCode';
import {ShoppingCartItem} from '../ShoppingCartItem/index';
import {ShoppingCartSummary} from '../ShoppingCartSummary';
import {Divider} from '../Divider';

export const ShoppingCartContent = () => {
  const {shoppingCart, onPress} = useShoppingCart();

  if (shoppingCart.length === 0) {
    return (
      <EmptyResults
        title="Cesta"
        message="Tu cesta está vacía. Cuando añadas productos aparecerán aquí"
        buttonTitle="Comprar ahora"
        icon="cart"
      />
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <H1>Cesta</H1>
        <ShoppingCartItem />
        <Divider padding={10} />
        <ShoppingCartPromoCode />
        <Divider padding={10} />
        <ShoppingCartSummary />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button onPress={onPress}>
          <Text>Pasar por caja</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopWidth: 1,
    borderTopColor: '#DEDEDE',
    padding: 16,
  },
});
