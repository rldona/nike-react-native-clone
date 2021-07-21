import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IProducts} from '../../models/index';

interface Props {
  product: IProducts;
}

export const ShoppingCartItem = ({product}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.backdrop}
          source={{
            uri: product.preview,
          }}
        />
        <View>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.subTitle}>
            {product.subTypeName} - {product.genreName}
          </Text>
          <Text style={styles.subTitle}>Negro</Text>
          <Text style={styles.subTitle}>Talla L</Text>
        </View>
      </View>
      <View style={styles.amountContainer}>
        <Text>Cant. 1</Text>
        <Text>{product.price} €</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
  },
  title: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
    width: 200,
    marginBottom: 3,
    lineHeight: 20,
  },
  subTitle: {
    color: '#666',
    width: 200,
    marginBottom: 3,
  },
  backdrop: {
    height: 130,
    width: 130,
    resizeMode: 'cover',
    marginRight: 10,
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 15,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  },
});
