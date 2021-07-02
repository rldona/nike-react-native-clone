import {useEffect, useState} from 'react';

import {IFavorites} from '../models';

export function useFavorites() {
  const [favorites, setFavorites] = useState<IFavorites[]>([]);

  const getFavorites = async () => {
    const favoriteList = await (
      await fetch('http://localhost:3000/favorites')
    ).json();

    setFavorites(favoriteList);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return {
    favorites,
  };
}
