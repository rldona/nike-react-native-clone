import http from '../api';

const getProducts = () => {
  return http.get('/products');
};

const getProduct = (id: any) => {
  return http.get(`/products/${id}`);
};

const getMenuItems = () => {
  return http.get('/menu');
};

const getGenres = () => {
  return http.get('/genres');
};

const createProduct = (data: any) => {
  return http.post('/products', data);
};

const updateProduct = (id: number, data: any) => {
  return http.put(`/products/${id}`, data);
};

const removeProduct = (id: any) => {
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
  getProduct,
  getMenuItems,
  getGenres,
  createProduct,
  updateProduct,
  removeProduct,
  removeProducts,
  findProductByTitle,
};
