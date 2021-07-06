import React, {useContext, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {QueryClient, useMutation} from 'react-query';

import {removeFavorite} from '../../services/favoritesService';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Context} from '../../context/options';

interface Props {
  id: number;
  type: string;
  subType: string;
  subTypeName: string;
  genre: string;
  genreName: string;
  title: string;
  description: string;
  price: number;
  preview: string;
  backdrop: string;
}

export const Product = (product: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    store: {isFavoriteEdited},
  }: any = useContext(Context);

  const queryClient = new QueryClient();
  const navigation = useNavigation();

  // const {data: product} = useQuery(['product', id], () => getProduct(id));

  // const createMutation = useMutation(createFavorite, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('favorites');
  //   },
  //   onError: (e: any) => {
  //     console.log(e);
  //   },
  // });

  const removeMutation = useMutation(removeFavorite, {
    onSuccess: () => {
      queryClient.refetchQueries();
    },
    onError: (e: any) => {
      console.log(e);
    },
  });

  // Favorite hoook (useFavorites)
  // Methods:
  // - addFavorite()
  // - removeFavorite()
  // - isFavorite()

  /** useFavorte para coger el metodo 'getIsFavorite' y hacer un useEffect y cambiar el estado 'isFavorite' **/

  // const addFavorite = () => {
  //   if (!isLoading && !findElementArray(favorites, id)) {
  //     createMutation.mutate(product?.data);
  //   }
  // };

  const deleleFavorite = () => {
    removeMutation.mutate(product.id);
  };

  const onPress = () => {
    if (isFavorite) {
      deleleFavorite();
    } else {
      // addFavorite();
      console.log('add favorite');
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        navigation.navigate('ProductDetail', {
          id: product.id,
          title: product.title,
        });
      }}>
      <View style={styles.container}>
        <Image
          style={styles.backdrop}
          source={{
            uri: product.preview,
          }}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.subType}>{product.subTypeName}</Text>
          <Text style={styles.title}>{product.price} €</Text>
        </View>
      </View>
      {isFavoriteEdited ? (
        <View style={styles.favoriteIcon}>
          <TouchableOpacity activeOpacity={1} onPress={onPress}>
            <View>
              {isFavorite ? (
                <MaterialIcons name="heart" size={20} color="#000" />
              ) : (
                <EvilIcons name="heart" size={24} color="#000" />
              )}
            </View>
          </TouchableOpacity>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginBottom: 20,
    width: 190,
  },
  info: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 12,
    width: 180,
    marginBottom: 3,
  },
  subType: {
    fontSize: 12,
    width: 180,
    color: '#666',
    marginBottom: 3,
  },
  backdrop: {
    height: 200,
    width: 190,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: '#FFF',
    borderRadius: 50,
    padding: 5,
  },
});
