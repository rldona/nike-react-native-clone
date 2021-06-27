import React, {useContext, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet} from 'react-native';

import {Context} from '../../context/options';
import {wait} from '../../utils';

import {H1} from '../../components/H1';
import {ProductMenu} from '../../components/ProductMenu';
import {GenreSelector} from '../../components/GenreSelector';
import {HorizontalScroll} from '../../components/HorizontalScroll';
import {Divider} from '../../components/Divider';

export const CatalogContent = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {dispatch}: any = useContext(Context);

  // 1. useEffect()
  // 2. getProducts() => axios.get()
  // 3. save data on store => products

  // const products = store.products;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch({type: 'SHOW_LOADING', payload: true});

    // Facke promise => REMOVE
    wait(2000).then(() => {
      setRefreshing(false);
      dispatch({type: 'SHOW_LOADING', payload: false});
    });

    // 1. getProducts() => axios.get()
    // 2. setRefreshing(false) => when the promise finish
    // 3. save data on store => products

    /*** Try React Query :) ***/
  }, [dispatch]);

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <H1>Tienda</H1>
      <GenreSelector />
      <Divider />
      <HorizontalScroll
        title="Imprescindibles, superventas y más"
        // data={products}
      />
      <ProductMenu />
      <Divider />
      <HorizontalScroll
        title="Ultimos y próximos lanzamientos"
        // data={products}
      />
      <Divider />
      <HorizontalScroll
        title="Colecciones de la selecciones"
        // data={products}
      />
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
