import React, { useEffect, useState } from 'react';
import Button from '../UI/Button';
import styles from './Category.module.css';

const Category = (props) => {
  const [buttonClasses, setButtonClasses] = useState(styles.button);

  useEffect(() => {
    if (props.name === 'All') {
      setButtonClasses(`${styles.button} ${styles.active}`)
    }
  
  }, [props.name])
  

  return (
    <Button variant='contained' className={buttonClasses}>{props.name}</Button>
    // <button className={buttonClasses}>{props.name}</button>
  )
}

export default Category