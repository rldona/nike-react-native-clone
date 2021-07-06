import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {useQuery} from 'react-query';

import {
  getGenres,
  getMenuItems,
  getProducts,
} from '../../services/productsService';

import {H1} from '../../components/H1';
import {ProductMenu} from '../../components/ProductMenu';
import {HorizontalScroll} from '../../components/HorizontalScroll';
import {Divider} from '../../components/Divider';
import {Loading} from '../Loading';
import {FilterSelector} from '../FilterSelector';

export const CatalogContent = () => {
  const {isLoading: isLoadingGenres, data: genres} = useQuery(
    'genres',
    getGenres,
  );

  const {isLoading: isLoadingLinks, data: links} = useQuery(
    'product-menu',
    getMenuItems,
  );

  const {isLoading: isLoadingProducts, data: products} = useQuery(
    'products',
    getProducts,
  );

  if (isLoadingGenres || isLoadingLinks || isLoadingProducts) {
    return <Loading />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <H1>Tienda</H1>
      <View style={styles.container}>
        <FilterSelector filterType="genres" filterList={genres?.data} />

        <Divider padding={10} />

        <HorizontalScroll
          title="Imprescindibles, superventas y más"
          products={products?.data}
        />

        <ProductMenu items={links?.data} />

        <Divider padding={10} />

        <HorizontalScroll
          title="Ultimos y próximos lanzamientos"
          products={products?.data}
        />

        <Divider padding={10} />

        <HorizontalScroll
          title="Colecciones de la selecciones"
          products={products?.data}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
});
