import http from '../api';
import {IProducts} from '../models/index';

const getProducts = () => {
  return http.get('/products');
};

const getShoppingCart = () => {
  return http.get('/shopping-cart');
};

const getProduct = (id: string) => {
  return http.get(`/products/${id}`);
};

const getMenuItems = () => {
  return http.get('/menu');
};

const getGenres = () => {
  return http.get('/genres');
};

const getClothing = () => {
  return http.get('/clothing');
};

const createProduct = (data: IProducts) => {
  return http.post('/products', data);
};

const updateProduct = (id: string, data: IProducts) => {
  return http.put(`/products/${id}`, data);
};

const removeProduct = (id: string) => {
  return http.delete(`/products/${id}`);
};

const removeProducts = () => {
  return http.delete('/products');
};

const findProductByTitle = (title: string) => {
  return http.get(`/products?title=${title}`);
};

export {
  getProducts,
  getShoppingCart,
  getProduct,
  getMenuItems,
  getGenres,
  getClothing,
  createProduct,
  updateProduct,
  removeProduct,
  removeProducts,
  findProductByTitle,
};
