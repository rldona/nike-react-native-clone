import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {useProducts} from '../../hooks/useProducts';

import {Product} from '../Product';

/**

ROPA: clothing

(Filters)

- Todo: (remove filters)
- Partes de Arriba: top-parts
- Sudaderas con y sin capucha: hoodies-and-sweatshirts
- Chaquetas y chalecos: jackets-and-vests
- Pantalones y mallas: pants-and-tights
- Chándales: tracksuits
- Pantalones cortos: shorts
- Compresión y capas base: compression-and-base-layers
- Surf y natación: surfing-and-swimming
- Calcetines y Ropa interior: socks-and-underwear

 */

export const ProductList = () => {
  const {products} = useProducts();

  if (products.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}: any) => <Product {...item} />}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.verticalScrollContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  verticalScrollContainer: {
    justifyContent: 'space-between',
  },
});
