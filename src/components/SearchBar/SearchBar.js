import React from 'react';
import styles from './SearchBar.module.css';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';

const SearchBar = () => {
  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }}}>
    <div className={styles['top-bar']}>
        <span className={styles['search-icon']}><BsSearch /></span>
        <input className={styles.search} />
    </div>
    </ IconContext.Provider>
  )
}

export default SearchBar