import React, {useContext} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {useQuery} from 'react-query';
import {Context} from '../../context/options';

import {
  getGenres,
  getMenuItems,
  getProducts,
} from '../../services/productsService';

import {getGenreName} from '../../utils';

import {H1} from '../../components/H1';
import {ProductMenu} from '../../components/ProductMenu';
import {HorizontalScroll} from '../../components/HorizontalScroll';
import {Divider} from '../../components/Divider';
import {Loading} from '../Loading';
import {FilterSelector} from '../FilterSelector';

export const CatalogContent = () => {
  const {
    store: {currentGenre},
  }: any = useContext(Context);

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

  const productsByGenre = products?.data.filter(
    (person: any) => person.genre === getGenreName(currentGenre),
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <H1>Tienda</H1>
      <View style={styles.container}>
        <FilterSelector filterType="genres" filterList={genres?.data} />

        <Divider padding={10} />

        <HorizontalScroll
          title="Imprescindibles, superventas y más"
          products={productsByGenre}
        />

        <ProductMenu items={links?.data} />

        <Divider padding={10} />

        <HorizontalScroll
          title="Ultimos y próximos lanzamientos"
          products={productsByGenre}
        />

        <Divider padding={10} />

        <HorizontalScroll
          title="Colecciones de la selecciones"
          products={productsByGenre}
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
