import React, {useReducer} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';

import {H1} from '../../components/H1';
import {ProductMenu} from '../../components/ProductMenu';
import {GenreSelector} from '../../components/GenreSelector';
import {HorizontalScroll} from '../../components/HorizontalScroll';
import {Divider} from '../../components/Divider';

import {initialState, reducer} from '../../context/options';

export const CatalogContent = () => {
  const [store, dispatch] = useReducer(reducer, initialState);

  // Get data from redux-thunk => (man, woman o kikds)
  // const products = useProducts();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <H1>Tienda: {store.count}</H1>
      <TouchableOpacity onPress={() => dispatch({type: 'increment'})}>
        <Text>Add</Text>
      </TouchableOpacity>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
