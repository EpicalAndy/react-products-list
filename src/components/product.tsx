import React from "react"
import { ProductProos } from "../models";

export function Product( {product}: ProductProos) {
  const [ details, setDetails ] = React.useState(false);

  return (
    <div>
      <img src={ product.image } width={'100px'} alt="GGWP!" />
      <h2>{ product.title }</h2>
      <div><span>Цена: </span><span> { product.price }</span></div>
      { details && <div>{ product.description }</div>}
      <button
      onClick={() => setDetails(!details)}>{ `${!details ? 'Показать' : 'Скрыть'} информацию` }</button>
      <hr />
    </div>
  )
}