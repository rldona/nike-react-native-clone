import React, {useContext, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Context} from '../../context/options';

import {useFavorites} from '../../hooks/useFavorites';
import {wait} from '../../utils';

import {H1} from '../H1';
import {Product} from '../Product';

export const FavoritesContent = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {dispatch}: any = useContext(Context);
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
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({item}) => <Product {...item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.verticalScrollContainer}
        ListHeaderComponent={() => <H1>Favoritos</H1>}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  verticalScrollContainer: {},
});
