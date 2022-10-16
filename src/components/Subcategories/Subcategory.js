import React from 'react';
import styles from './Subcategory.module.css';

const Subcategory = (props) => {
  return (
    <button className={styles.button}>{props.name}</button>
  )
}

export default Subcategory