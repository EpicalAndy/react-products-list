import React from "react"

export interface IProduct {
  id?: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: { rate: number, count: number }
}

export interface ProductProos {
  product: IProduct
}

export interface ErrorMessageProps {
  error: string
}

export interface ModalProps {
  children: React.ReactNode,
  title: string,
  onClose: () => void
}

export interface ProductCreateProps {
  onCreate: (oroduct: IProduct) => void
}

export interface IModalContext {
  modalVisible: boolean,
  open: () => void,
  close: () => void
}
