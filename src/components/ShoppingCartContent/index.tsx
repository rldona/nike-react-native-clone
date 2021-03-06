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
import {IProducts} from '../../models';
import {getSumOfProductPrices} from '../../utils';

export const ShoppingCartContent = ({navigation}: any) => {
  const {
    isLoading,
    refetch,
    data: shoppingCart,
  } = useQuery('shopping-cart', getShoppingCart);

  const onPress = () => {
    console.log('--- press button shopping cart ---');
  };

  useEffect(() => {
    return navigation.addListener('focus', () => {
      console.log('Montrar Loading...');
      refetch().then(() => {
        console.log('Ocultar Loading...');
      });
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

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.shoppingCartList}>
        <H1>Cesta</H1>

        <View style={styles.content}>
          {shoppingCart?.data.map((product: IProducts) => (
            <ShoppingCartItem key={product.id} product={product} />
          ))}

          <ShoppingCartPromoCode />

          <Split padding={10} />

          <ShoppingCartSummary
            totalPrice={getSumOfProductPrices(shoppingCart?.data)}
          />
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
  shoppingCartList: {
    paddingBottom: 120,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderTopWidth: 1,
    borderTopColor: '#DEDEDE',
    padding: 16,
    backgroundColor: '#FFF',
  },
});
