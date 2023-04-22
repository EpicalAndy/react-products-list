import { ModalProps } from "../models";

export function Modal({children, title, onClose}: ModalProps) {
  return (
    <>
      <div style={ {position: 'fixed', backgroundColor: 'gray', opacity: 0.5, height: '100%', width: '100%', bottom: '0'} }
        onClick={onClose}></div>
      <div style={ {textAlign: 'center', backgroundColor: 'gray', opacity: 0.5, position: 'relative', zIndex: 100, top: '20em', left: 'calc(100% - 50% - 10em)', width: '20em'} }>
        <h2>{ title }</h2>
        { children }
      </div>
    </>
  )
}