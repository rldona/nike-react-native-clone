import {useQuery} from 'react-query';

import {getFavorites} from '../services/favoritesService';

export function useFavorites() {
  const query = useQuery('favorites', getFavorites);

  return {
    favorites: query || [],
    query,
  };
}
