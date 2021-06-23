import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

import {ProductMenuItem} from './ProductMenuItem';
import {productMenuList} from '../../mocks/index';

const image = require('../../assets/images/menu/menu-man.png');

export const ProductMenu = () => {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        {productMenuList.map((item, index) => (
          <ProductMenuItem title={item.title} key={index} />
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 533, // TODO: hacerlo dinámico: productMenuList.length * height
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
