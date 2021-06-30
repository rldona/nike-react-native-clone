import {useEffect, useState} from 'react';
import {IProducts} from '../models';

export function useProducts() {
  const [products, setProducts] = useState<IProducts[]>([]);

  const getProducts = async () => {
    const productList = await (
      await fetch('http://localhost:3000/products')
    ).json();

    setProducts(productList);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
  };
}
