import React from 'react';
import styles from './Modal.module.css';

const Backdrop = (props) => {
    return (
        <div className={styles.backdrop} onClick={props.onClick}></div>
      )
}

const Modal = (props) => {
  return (
    <>
    <Backdrop onClick={()=>{props.setShowModal(false)}} />
    <div className={styles.modal}>{props.children}</div>
    </>
  )
}

export default Modal