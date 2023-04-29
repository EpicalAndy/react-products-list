import React from "react"
import { ProductProos } from "../models";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Product({ product }: ProductProos) {
  const [ details, setDetails ] = React.useState(false);

  return (
    <Card className="m-2"
          style={{ width: '20rem' }}>
      <Card.Body className="product-body">
        <Card.Title>
          <h4>{product.title}</h4>
        </Card.Title>
        <Card.Img src={product.image} width={'100px'} alt="GGWP!"/>

        <div>
          <Card.Text>
            <span>Цена: </span>
            <span>{product.price}</span>
          </Card.Text>
          {details && <div>{product.description}</div>}
          <Button
            onClick={() => setDetails(!details)}>
            {`${!details ? 'Показать' : 'Скрыть'} информацию`}
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}
