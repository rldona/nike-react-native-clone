import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

import {IMenuItem, IProductMenu} from '../../models';

import {ProductMenuItem} from './ProductMenuItem';

export const ProductMenu = () => {
  const [menu, setMenu] = useState<IProductMenu>({
    links: [],
    backgrounds: [],
  });

  const getMenuItems = async () => {
    const menuList: IProductMenu = await (
      await fetch('http://localhost:3000/menu')
    ).json();

    setMenu(menuList);
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  if (menu.links.length === 0) {
    return null;
  }

  return (
    <ImageBackground
      source={{
        uri: menu.backgrounds[1],
      }}
      style={styles.image}>
      <View style={styles.container}>
        {menu.links.map((item: IMenuItem) => (
          <ProductMenuItem id={item.id} title={item.title} key={item.id} />
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
