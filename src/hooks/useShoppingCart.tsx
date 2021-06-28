import {useEffect, useState} from 'react';
import {IFavorites} from '../models';

export function useShoppingCart() {
  const [shoppingCart, setShoppingCart] = useState<IFavorites[]>([]);

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
  };
}
