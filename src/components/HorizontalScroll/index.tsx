import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import {Product} from '../Product';
import {IProducts} from '../../models/index';

interface Props {
  title: string;
  products: IProducts[];
}

/*

<Product {...item} /> tiene que tener un tipo para diferenciar si es un item que redirige a <ProductDetail /> o <Categories />:

1. <Product {...item} type="detail" />
2. <Product {...item} type="categories" />

*/

export const HorizontalScroll = ({title, products}: Props) => {
  if (products.length === 0) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        data={products}
        renderItem={({item}) => (
          <Product product={products[item.id]} {...item} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScroll}
        ItemSeparatorComponent={() => <Text style={styles.text} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '400',

    paddingLeft: 20,
    marginBottom: 20,
  },
  horizontalScroll: {
    marginLeft: 15,
    paddingRight: 30,
  },
  text: {
    padding: 5,
  },
});
