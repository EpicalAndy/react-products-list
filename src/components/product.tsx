import React from "react"
import { ProductProos } from "../models";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Product({ product }: ProductProos) {
  const [ details, setDetails ] = React.useState(false);

  return (
    <Card style={{ width: '24rem' }}>
      <Card.Body>
        <Card.Title>
          <h3>{product.title}</h3>
        </Card.Title>
        <Card.Img src={product.image} width={'100px'} alt="GGWP!"/>

        <Card.Text>
          <span>Цена: </span>
          <span>{product.price}</span>
        </Card.Text>
        {details && <div>{product.description}</div>}
        <Button
          onClick={() => setDetails(!details)}>
          {`${!details ? 'Показать' : 'Скрыть'} информацию`}
        </Button>
      </Card.Body>
    </Card>
  )
}
