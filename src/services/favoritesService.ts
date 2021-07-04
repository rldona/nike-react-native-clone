import http from '../api';

const getFavorites = () => {
  return http.get('/favorites');
};

const getFavorite = (id: any) => {
  return http.get(`/favorites/${id}`);
};

const createFavorite = (data: any) => {
  return http.post('/favorites', data);
};

const updateFavorite = (id: number, data: any) => {
  return http.put(`/favorites/${id}`, data);
};

const removeFavorite = (id: any) => {
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
