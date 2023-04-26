import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

import { ModalProps } from "../models";


export function ModalComponent({ children, title, onClose }: ModalProps) {
  const [ show, setShow ] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal backdrop="static"
           show={show}
           onHide={handleClose}>
      <div
        onClick={onClose}></div>
      <div>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </div>
    </Modal>
  )
}
