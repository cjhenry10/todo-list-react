import React, {useContext, useState} from 'react';
import Category from './Category';
import styles from './CategoryList.module.css';
import TodoContext from '../../context/todo-context';

const CategoryList = () => {
  const {categories: ctxCategories} = useContext(TodoContext);
  return (
    <div className={styles.categories}>
      <Category name='All'/>
      <Category name='Unsorted' />
      {ctxCategories.map(cat => {
        return <Category key={cat} name={cat} />
      })}
    </div>
  )
}

export default CategoryList