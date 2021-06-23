import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

import {ProductMenuItem} from './ProductMenuItem';
import {IProductMenu} from '../../models';

const image = require('../../assets/images/menu/menu-man.png');

export const ProductMenu = () => {
  const [menu, setMenu] = useState<IProductMenu[]>([]);

  const getMenuItems = async () => {
    const menuList = await (await fetch('http://localhost:3000/menu')).json();
    setMenu(menuList);
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  if (menu.length === 0) {
    return null;
  }

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        {menu.map((item: IProductMenu) => (
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
