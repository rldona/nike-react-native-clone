import React, {useContext} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

import {IMenuItem} from '../../models';
import {Context} from '../../context/options';

import {ProductMenuItem} from './ProductMenuItem';

export const ProductMenu = ({items}: any) => {
  const {store}: any = useContext(Context);
  const genreId = store.currentGenre;

  if (items.links.length === 0) {
    return null;
  }

  return (
    <ImageBackground
      source={{
        uri: items.backgrounds[genreId],
      }}
      style={{...styles.image, height: items.links.length * 102}}>
      <View style={styles.container}>
        {items.links.map((item: IMenuItem) => (
          <ProductMenuItem key={item.id} {...item} />
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
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
