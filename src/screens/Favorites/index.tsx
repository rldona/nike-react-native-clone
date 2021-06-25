import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {IFavorites} from '../../models';

import {ProductItem} from '../../components/ProductItem';

export const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState<IFavorites[]>([]);

  const getFavorites = async () => {
    const favoriteList = await (
      await fetch('http://localhost:3000/popular')
    ).json();

    setFavorites(favoriteList);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textBlank} />
        <Text style={styles.text}>Favoritos</Text>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => console.log('favorite taped !')}>
          <Text style={styles.text}>Editar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={favorites}
        renderItem={({item}) => (
          <ProductItem title={item.title} image={item.backdrop} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.verticalScrollContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
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
  },
  textBlank: {
    width: 80,
  },
  verticalScrollContainer: {},
});
