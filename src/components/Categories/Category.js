import React, { useEffect, useState } from 'react';
import styles from './Category.module.css';

const Category = (props) => {
  const [buttonClasses, setButtonClasses] = useState(styles.button);

  useEffect(() => {
    if (props.name === 'All') {
      setButtonClasses(`${styles.button} ${styles.active}`)
    }
  
  }, [props.name])
  

  return (
    <button className={buttonClasses}>{props.name}</button>
  )
}

export default Category