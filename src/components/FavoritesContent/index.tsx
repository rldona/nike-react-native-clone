import React, {useContext, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {wait} from '../../utils';
import {Context} from '../../context/options';
import {useFavorites} from '../../hooks/useFavorites';

import {H1} from '../H1';
import {Product} from '../Product';
import {EmptyResults} from '../EmptyResults';

interface Props {
  navigation: any;
}

export const FavoritesContent = ({navigation}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const {
    store: {isFavoriteEdited, showEditFavoritesButton},
    dispatch,
  }: any = useContext(Context);

  const {favorites} = useFavorites();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch({type: 'SHOW_LOADING', payload: true});

    // Facke promise => REMOVE
    wait(2000).then(() => {
      setRefreshing(false);
      dispatch({type: 'SHOW_LOADING', payload: false});
    });

    // 1. getFavorites() => axios.get()
    // 2. setRefreshing(false) => when the promise finish
    // 3. save data on store => products

    /*** Try React Query :) ***/

    navigation.addListener('focus', () => {
      console.log('-- Favorite Screen focus --');
    });
  }, [dispatch, navigation]);

  if (favorites.length === 0) {
    return (
      <EmptyResults
        message={
          'Los productos que añadas a tu lista de desesos se guardarán aquí'
        }
        buttonTitle={'Comprar ahora'}
        icon={'heart'}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({item}) => <Product {...item} />}
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
              {showEditFavoritesButton ? (
                <Text style={styles.text}>
                  {isFavoriteEdited ? 'OK' : 'Editar'}
                </Text>
              ) : null}
            </TouchableOpacity>
          </>
        )}
        onRefresh={onRefresh}
        refreshing={refreshing}
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
    top: 0,
    right: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    paddingRight: 20,
  },
});
