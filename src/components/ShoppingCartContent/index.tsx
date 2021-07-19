import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useQuery} from 'react-query';

import {getShoppingCart} from '../../services/productsService';

import {H1} from '../H1';
import {Split} from '../Split';
import {Button} from '../Button';
import {Loading} from '../Loading';
import {EmptyResults} from '../EmptyResults';
import {ShoppingCartPromoCode} from '../ShoppingCartPromoCode';
import {ShoppingCartItem} from '../ShoppingCartItem/index';
import {ShoppingCartSummary} from '../ShoppingCartSummary';

export const ShoppingCartContent = ({navigation}: any) => {
  const {
    isLoading,
    refetch,
    data: shoppingCart,
  } = useQuery('shopping-cart', getShoppingCart);

  useEffect(() => {
    return navigation.addListener('focus', () => {
      refetch();
      console.log('--- Refresh shopping cart ---');
    });
  }, [navigation, refetch]);

  if (isLoading) {
    return <Loading />;
  }

  if (shoppingCart?.data.length === 0) {
    return (
      <EmptyResults
        title="Cesta"
        message="Tu cesta está vacía. Cuando añadas productos aparecerán aquí"
        buttonTitle="Comprar ahora"
        icon="cart"
      />
    );
  }

  const onPress = () => {
    console.log('--- press button shopping cart ---');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <H1>Cesta</H1>

        <View style={styles.content}>
          <ShoppingCartItem />

          <Split padding={10} />

          <ShoppingCartPromoCode />

          <Split padding={10} />

          <ShoppingCartSummary />
        </View>
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
  },
  content: {
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
