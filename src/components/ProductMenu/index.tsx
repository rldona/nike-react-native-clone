import React, {useContext} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

import {Context} from '../../context/options';

import {IMenuItem} from '../../models';
import {useMenu} from '../../hooks/useMenu';
import {ProductMenuItem} from './ProductMenuItem';

export const ProductMenu = () => {
  const {store}: any = useContext(Context);
  const {menu} = useMenu();

  const genreId = store.currentGenre;

  if (menu.links.length === 0) {
    return null;
  }

  return (
    <ImageBackground
      source={{
        uri: menu.backgrounds[genreId],
      }}
      style={styles.image}>
      <View style={styles.container}>
        {menu.links.map((item: IMenuItem) => (
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
    height: 515, // TODO: hacerlo dinámico: productMenuList.length * height
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
