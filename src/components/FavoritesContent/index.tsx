import React, {useContext, useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useQuery} from 'react-query';

import {Context} from '../../context/options';
import {getFavorites} from '../../services/favoritesService';

import {H1} from '../H1';
import {Product} from '../Product';
import {EmptyResults} from '../EmptyResults';
import {Loading} from '../Loading';

export const FavoritesContent = ({navigation}: any) => {
  const {
    isLoading,
    refetch,
    data: favorites,
  } = useQuery('favorites', getFavorites);

  const {
    store: {isFavoriteEdited},
    dispatch,
  }: any = useContext(Context);

  useEffect(() => {
    return navigation.addListener('focus', () => {
      console.log('Montrar Loading...');
      refetch().then(() => {
        console.log('Ocultar Loading...');
      });
    });
  }, [navigation, refetch]);

  if (isLoading) {
    return <Loading />;
  }

  if (favorites?.data.length === 0) {
    return (
      <EmptyResults
        title="Favoritos"
        message="Los productos que añadas a tu lista de desesos se guardarán aquí"
        buttonTitle="Comprar ahora"
        icon="heart"
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites?.data}
        renderItem={({item}) => (
          <Product product={favorites?.data[item.id]} {...item} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <H1>Favoritos</H1>
            <TouchableOpacity
              activeOpacity={1}
              style={styles.editButton}
              onPress={() =>
                dispatch({type: 'TOGGLE_SHOW_BUTTON_TO_EDIT_FAVORITES'})
              }>
              <Text style={styles.text}>
                {isFavoriteEdited ? 'OK' : 'Editar'}
              </Text>
            </TouchableOpacity>
          </>
        )}
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
  editButton: {
    position: 'absolute',
    top: 10,
    right: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    paddingRight: 20,
  },
});
