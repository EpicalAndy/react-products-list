import React from "react";

import { useContext } from "react";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";
import { useProducts } from "../hooks/products";
import { Modal } from "../components/modal";
import { Product } from '../components/product';
import { Error } from '../components/error';
import { Loader } from '../components/loader';
import { CreateProduct } from '../components/createproduct';

export function ProductPage() {
  const { load, error, products, addProduct } = useProducts();
  const {modalVisible, open, close } = useContext(ModalContext);

  function createHandler(product: IProduct) {
    close();

    addProduct(product);
  }

  return (
    <div>
      { load && <Loader></Loader> }
      <button type='button' onClick={ () => open() }>Добавить продукт</button>
      { error && <Error error={ error }></Error> }
      { modalVisible && <Modal title='Добавить продукт' onClose={() => close() }>
        <CreateProduct onCreate={ createHandler }></CreateProduct>
      </Modal> }
      { products.map(product => <Product product={ product } key={ product.id }></Product>) }
    </div>
  );
}
