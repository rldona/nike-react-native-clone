import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, ScrollView, View} from 'react-native';
import Snackbar from 'react-native-snackbar';

import {QueryClient, useQuery, useMutation} from 'react-query';

import {Divider} from '../Divider';
import {Button} from '../Button';
import {Loading} from '../Loading';

import {getProduct} from '../../services/productsService';
import {
  createFavorite,
  getFavorites,
  removeFavorite,
} from '../../services/favoritesService';

const queryClient = new QueryClient();

export const ProductDetail = ({
  route: {
    params: {id, title},
  },
  navigation,
}: any) => {
  const {isLoading, data: product} = useQuery(['product', id], () =>
    getProduct(id),
  );
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useQuery('favorites', getFavorites);

  const mutation = useMutation(createFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries('favorites');
    },
    onError: (e: any) => {
      console.log(e);
    },
  });

  const removeMutation = useMutation(removeFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries('favorites');
    },
    onError: (e: any) => {
      console.log(e);
    },
  });

  const addFavorite = () => {
    let favoritesData: any = favorites.data?.data;
    let favoriteAlreadyExists = favoritesData.find(
      (i: any) => i.id === parseInt(id, 10),
    );

    if (typeof favoriteAlreadyExists === 'undefined') {
      mutation.mutate(product?.data);

      setIsFavorite(true);

      Snackbar.show({
        text: 'Añadido a favoritos',
        duration: 3000,
        textColor: '#FFF',
        backgroundColor: '#00b64a',
      });
    } else {
      Snackbar.show({
        text: 'El favorito ya está guardado',
        duration: 3000,
        textColor: '#FFF',
        backgroundColor: '#000',
      });
    }
  };

  const deleteFavorite = () => {
    console.log('removed favorite');
    removeMutation.mutate(id);
    setIsFavorite(false);
  };

  useEffect(() => {
    navigation.setOptions({title});

    /***** Create hook *****/
    if (!isLoading) {
      let favoritesData: any = favorites.data?.data;
      let favoriteAlreadyExists = favoritesData.find(
        (i: any) => i.id === parseInt(id, 10),
      );
      if (typeof favoriteAlreadyExists !== 'undefined') {
        setIsFavorite(true);
      }
    }
    /***** Create hook *****/
  }, [navigation, title, favorites.data?.data, id, isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContainer}>
      <Image
        style={styles.backdrop}
        source={{
          uri: product?.data.backdrop,
        }}
      />
      <Text style={styles.preTitle}>
        {product?.data.subTypeName} - {product?.data.genreName}
      </Text>
      <Text style={styles.title}>{product?.data.title}</Text>
      <Text style={styles.price}>{product?.data.price} €</Text>
      <Text style={styles.description}>{product?.data.description}</Text>
      <View style={styles.buttonContainer}>
        <Button size="medium">
          <Text>Añadir a la cesta</Text>
        </Button>
        <Divider padding={7} />
        {isFavorite ? (
          <Button
            size="medium"
            backgroundColor="#FFF"
            color="#000"
            border="#000"
            onPress={deleteFavorite}>
            <Text>En favoritos</Text>
          </Button>
        ) : (
          <Button
            size="medium"
            backgroundColor="#FFF"
            color="#000"
            border="#000"
            onPress={addFavorite}>
            <Text>Añadir a tus favoritos</Text>
          </Button>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    paddingBottom: 20,
  },
  backdrop: {
    height: 500,
    resizeMode: 'cover',
    marginBottom: 30,
  },
  preTitle: {
    color: '#000',
    fontSize: 14,
    fontWeight: '300',
    paddingLeft: 20,
    paddingBottom: 5,
  },
  title: {
    color: '#000',
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 15,
  },
  price: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    paddingLeft: 20,
    paddingBottom: 15,
  },
  description: {
    color: '#000',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 25,
    paddingLeft: 20,
    paddingRight: 40,
    paddingBottom: 20,
  },
  buttonContainer: {
    padding: 20,
  },
});
