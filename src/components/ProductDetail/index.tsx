import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, ScrollView, View} from 'react-native';
import Snackbar from 'react-native-snackbar';

import {QueryClient, useQuery, useMutation} from 'react-query';

import {Split} from '../Split';
import {Button} from '../Button';
import {Loading} from '../Loading';

import {getProduct} from '../../services/productsService';
import {findElementArray} from '../../utils/index';

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
  const [isFavorite, setIsFavorite] = useState(false);

  const {data: favorites} = useQuery('favorites', getFavorites);
  const {isLoading, data: product} = useQuery(['product', id], () =>
    getProduct(id),
  );

  const createMutation = useMutation(createFavorite, {
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
    createMutation.mutate(product?.data);

    setIsFavorite(true);

    Snackbar.show({
      text: 'Añadido a favoritos',
      duration: 3000,
      textColor: '#FFF',
      backgroundColor: '#00b64a',
    });
  };

  const deleteFavorite = () => {
    removeMutation.mutate(id);
    setIsFavorite(false);
  };

  useEffect(() => {
    navigation.setOptions({title});

    if (!isLoading && findElementArray(favorites, id)) {
      setIsFavorite(true);
    }
  }, [navigation, title, favorites, id, isLoading]);

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
        <Split padding={7} />
        {isFavorite ? (
          <Button
            size="medium"
            backgroundColor="#FFF"
            textColor="#000"
            borderColor="#000"
            onPress={deleteFavorite}>
            <Text>En favoritos</Text>
          </Button>
        ) : (
          <Button
            size="medium"
            backgroundColor="#FFF"
            textColor="#000"
            borderColor="#000"
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
