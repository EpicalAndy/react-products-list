import axios from "axios";
import React, { useState } from "react"
import Form from 'react-bootstrap/Form';
import { Button, InputGroup } from "react-bootstrap";

import { Error } from "./error";
import { IProduct } from "../models";
import { ProductCreateProps } from "../models";

const newProduct: IProduct = {
  title: 'test product',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: { rate: 10, count: 20 }
};

export function CreateProduct({ onCreate }: ProductCreateProps) {
  const [ value, setValue ] = useState('');
  const [ error, setError ] = useState('');

  newProduct.title = value;

  async function submitHandler(ev: React.FormEvent) {
    const val = value.trim();

    ev.preventDefault();
    setError('');

    if (!val.length) {
      setError('Нужно заполнить поле');

      return;
    }

    newProduct.title = val;

    const response = await axios.post('https://fakestoreapi.com/products', newProduct);

    onCreate(response.data);
  }

  function changeHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    // @ts-ignore
    setValue(event.target.value);
  }


  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <InputGroup>
          <Form.Control
            placeholder="введите текст"
            // @ts-ignore
            onChange={changeHandler}
            value={value}>
          </Form.Control>
          <Button variant="secondary" type="submit">Создать</Button>
        </InputGroup>
        {error && <Error error={error}></Error>}
      </form>
    </>
  )
}
