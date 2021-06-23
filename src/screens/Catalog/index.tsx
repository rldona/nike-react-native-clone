import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {H1} from '../../components/H1';
import {H2} from '../../components/H2';
import {ProductMenu} from '../../components/ProductMenu';
import {GenreSelector} from '../../components/GenreSelector';

export const CatalogScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.paddingLateral}>
        <H1>Tienda</H1>
      </View>
      <GenreSelector />
      <View style={styles.paddingLateral}>
        <H2>Imprescindibles, superventas y más</H2>
      </View>
      <ProductMenu />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paddingLateral: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontSize: 20,
    marginRight: 20,
  },
});
