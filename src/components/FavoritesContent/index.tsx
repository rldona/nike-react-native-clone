import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {useFavorites} from '../../hooks/useFavorites';

import {H1} from '../H1';
import {Product} from '../Product';

export const FavoritesContent = () => {
  const {favorites} = useFavorites();
  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({item}) => <Product {...item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.verticalScrollContainer}
        ListHeaderComponent={() => <H1>Favoritos</H1>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    paddingRight: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    paddingRight: 20,
  },
  verticalScrollContainer: {},
});
