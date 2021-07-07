import React, {useContext} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Context} from '../../context/options';

import {useQuery} from 'react-query';

import {getGenreName} from '../../utils';
import {getProducts} from '../../services/productsService';

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
  const {
    store: {currentGenre},
  }: any = useContext(Context);

  const {isLoading: isLoadingProducts, data: products} = useQuery(
    'products',
    getProducts,
  );

  if (isLoadingProducts) {
    return null;
  }

  const productsByGenre = products?.data.filter(
    (person: any) => person.genre === getGenreName(currentGenre),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={productsByGenre}
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
