import {useEffect, useState} from 'react';
import {IProducts} from '../models';

export function useProducts(id: number) {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [product, setProduct] = useState<IProducts>();

  const getProducts = async () => {
    const productList = await (
      await fetch('http://localhost:3000/products')
    ).json();

    setProducts(productList);
  };

  const getProduct = async (prodcutId: number) => {
    const productDetail = await (
      await fetch(`http://localhost:3000/products/${prodcutId}`)
    ).json();

    setProduct(productDetail);
  };

  useEffect(() => {
    getProducts();
    getProduct(id);
  }, [id]);

  return {
    products,
    product,
  };
}
