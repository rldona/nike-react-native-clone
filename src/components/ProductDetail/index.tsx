import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, ScrollView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useProducts} from '../../hooks/useProducts';

import {Divider} from '../Divider';
import {Button} from '../Button';

export const ProductDetail = ({route}: any) => {
  const {product} = useProducts(route.params.id);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({title: route.params.title});
  }, [navigation, route]);

  if (!product) {
    return null;
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContainer}>
      <Image
        style={styles.backdrop}
        source={{
          uri: product.backdrop,
        }}
      />
      <Text style={styles.preTitle}>
        {product.subTypeName} - {product.genreName}
      </Text>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price} €</Text>
      <Text style={styles.description}>{product.description}</Text>
      <View style={styles.buttonContainer}>
        <Button size="medium">
          <Text>Añadir a la cesta</Text>
        </Button>
        <Divider padding={7} />
        <Button size="medium" backgroundColor="#FFF" color="#000" border="#000">
          <Text>Añadir a tus favoritos</Text>
        </Button>
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
