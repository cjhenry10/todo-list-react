import React from 'react';
import styles from './SubcategoryList.module.css';
import Subcategory from './Subcategory';

const dummyCategories = ['subcategory1', 'subcategory2'];


const SubcategoryList = () => {
  return (
    <div className={styles.subcategories}>
      {/* {dummyCategories.map(cat => {
        return <Subcategory 
        key={cat}
        name={cat} />
      })} */}
    </div>
  )
}

export default SubcategoryList