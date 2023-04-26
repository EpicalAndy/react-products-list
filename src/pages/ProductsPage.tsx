import React from "react";

import { useContext } from "react";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";
import { useProducts } from "../hooks/products";
import { ModalComponent } from "../components/modal";
import { Product } from '../components/product';
import { Error } from '../components/error';
import { Loader } from '../components/loader';
import { CreateProduct } from '../components/createproduct';
import { Button } from "react-bootstrap";

export function ProductPage() {
  const { load, error, products, addProduct } = useProducts();
  const { modalVisible, open, close } = useContext(ModalContext);

  function createHandler(product: IProduct) {
    close();

    addProduct(product);
  }

  return (
    <><Button
      variant="info"
      type='button'
      onClick={() => open()}>
      Добавить продукт
    </Button>
      <div className='products-list'>
        {load && <Loader></Loader>}

        {error && <Error error={error}></Error>}
        {modalVisible &&
          <ModalComponent title='Добавить продукт'
                          onClose={() => close()}>
            <CreateProduct onCreate={createHandler}></CreateProduct>
          </ModalComponent>}
        {products.map(product => <Product product={product} key={product.id}></Product>)}
      </div>
    </>

  );
}
