import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {IFavorites} from '../../models';

import {H1} from '../../components/H1';
import {Product} from '../../components/Product';

const FavoritesStack = createStackNavigator();

export const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState<IFavorites[]>([]);

  const isFavoriteEdit = false; // TODO: Linkar con el estado de Redux

  const FavoritesContent = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={favorites}
          renderItem={({item}) => (
            <Product title={item.title} image={item.backdrop} />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.verticalScrollContainer}
          ListHeaderComponent={() => <H1>Favoritos</H1>}
        />
      </View>
    );
  };

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
    <FavoritesStack.Navigator
      screenOptions={{
        headerTitleStyle: {color: '#2196f3'},
        cardStyle: {backgroundColor: '#FFF'},
        headerStyle: {shadowColor: 'transparent'},
      }}>
      <FavoritesStack.Screen
        name="Favorites"
        component={FavoritesContent}
        options={{
          title: 'Favoritos',
          headerTitleStyle: {
            color: '#000',
            fontSize: 16,
            borderBottomColor: '#000',
            borderBottomWidth: 1,
          },
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => console.log('Edit favorite !!')}>
              {isFavoriteEdit ? (
                <Text style={styles.text}>OK</Text>
              ) : (
                <Text style={styles.text}>Editar</Text>
              )}
            </TouchableOpacity>
          ),
        }}
      />
    </FavoritesStack.Navigator>
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
