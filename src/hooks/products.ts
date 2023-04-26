import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

import { IProduct } from '../models';

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product])
  }

  async function fetchProducts() {
    setLoad(true);

    try {
      setError('');
      const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products');
      setProducts(response.data);

      setLoad(false);
    } catch(err: unknown) {
      const error = err as AxiosError;

      setError(error.message);

      setLoad(false);
    }

    setLoad(false);
    
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, load, error, addProduct };
}
