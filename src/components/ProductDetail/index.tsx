import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, ScrollView, View, Modal} from 'react-native';
import Snackbar from 'react-native-snackbar';

import {QueryClient, useQuery, useMutation} from 'react-query';

import {Split} from '../Split';
import {Button} from '../Button';
import {Loading} from '../Loading';

import {findElementArray} from '../../utils';

import {
  addProductToShoppingCart,
  getProduct,
} from '../../services/productsService';

import {
  createFavorite,
  getFavorites,
  removeFavorite,
} from '../../services/favoritesService';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

const queryClient = new QueryClient();

export const ProductDetail = ({
  route: {
    params: {id, title},
  },
  navigation,
}: any) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const {data: favorites} = useQuery('favorites', getFavorites);

  const {isLoading, data: product} = useQuery(['product', id], () =>
    getProduct(id),
  );

  const createFavoriteMutation = useMutation(createFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries('favorites');
    },
    onError: (e: any) => {
      console.log(e);
    },
  });

  const addProductToShoppingCartMutation = useMutation(
    addProductToShoppingCart,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('shopping-cart');
      },
      onError: (e: any) => {
        console.log(e);
      },
    },
  );

  const removeMutation = useMutation(removeFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries('favorites');
    },
    onError: (e: any) => {
      console.log(e);
    },
  });

  const addProduct = () => {
    console.log('Add product to shopping cart');
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
    addProductToShoppingCartMutation.mutate(product?.data);
  };

  const addFavorite = () => {
    createFavoriteMutation.mutate(product?.data);

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
        <Button size="medium" onPress={addProduct}>
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
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        statusBarTranslucent={true}>
        <View style={styles.modalView}>
          <View style={styles.modalContent}>
            <EvilIcons name="check" size={90} color="#FFF" />
            <Text style={styles.modalTitle}>Añadido a la cesta</Text>
            <Text style={styles.modalSubTitle}>(1 producto en total)</Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    alignItems: 'center',
  },
  modalTitle: {
    color: '#FFF',
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
  },
  modalSubTitle: {
    color: '#FFF',
    fontSize: 16,
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
