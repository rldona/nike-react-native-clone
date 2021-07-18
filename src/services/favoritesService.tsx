import http from '../api';
import {IProducts} from '../models';

const getFavorites = () => {
  return http.get('/favorites');
};

const getFavorite = (id: number) => {
  return http.get(`/favorites/${id}`);
};

const createFavorite = (favorite: IProducts) => {
  return http.post('/favorites', favorite);
};

const updateFavorite = (id: number, data: IProducts) => {
  return http.put(`/favorites/${id}`, data);
};

const removeFavorite = (id: string) => {
  return http.delete(`/favorites/${id}`);
};

const removeFavorites = () => {
  return http.delete('/favorites');
};

const findFavoritesByTitle = (title: string) => {
  return http.get(`/favorites?title=${title}`);
};

export {
  getFavorites,
  getFavorite,
  createFavorite,
  updateFavorite,
  removeFavorite,
  removeFavorites,
  findFavoritesByTitle,
};
