import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button className={`${styles.button} ${styles[props.variant]} ${props.className}`} onClick={props.onClick} {...props.button}>{props.children}</button>
  )
}

export default Button