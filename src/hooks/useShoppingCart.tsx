import {useEffect, useState} from 'react';
import {IFavorites} from '../models';

export function useShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState<IFavorites[]>([]);

  const onPress = () => {
    console.log('--- press button shopping cart ---');
  };

  const getShoppingCart = async () => {
    const favoriteList = await (
      await fetch('http://localhost:3000/favorites')
    ).json();

    setShoppingCart(favoriteList);
  };

  useEffect(() => {
    getShoppingCart();
  }, []);

  return {
    shoppingCart,
    onPress,
  };
}
