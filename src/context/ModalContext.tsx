import React, { Children, createContext, useState } from "react";
import { IModalContext } from "../models";




export const ModalContext = createContext<IModalContext>({
  modalVisible: false,
  open: () => {},
  close: () => {}
});

export const ModalState = ({ children } : { children: React.ReactNode }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const open = () => setModalVisible(true);
  const close = () => setModalVisible(false);

  return (
    <ModalContext.Provider value={ { modalVisible, open, close } }>
      { children }
    </ModalContext.Provider>
  )
}