import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import {
  BsFillBookmarksFill,
  BsFillBookmarkStarFill,
  BsCheckCircleFill,
} from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';

const dummyLinks = ['Add Category', 'Add Subcategory', 'Add Task'];
const icons = [
  <BsFillBookmarksFill size={24} />,
  <BsFillBookmarkStarFill size={24} />,
  <BsCheckCircleFill size={24} />,
];

const Nav = () => {
  const [navClasses, setNavClasses] = useState(
    `${styles.navbar} ${styles['no-transitions']}`
  );
  const [linkClasses, setLinkClasses] = useState(`${styles['link-text']}`);

  const navRef = useRef();

  let timer;

  const handleClick = () => {
    if (linkClasses === `${styles['link-text']}`) {
      // setNavOpen(true);
      setNavClasses(`${styles.navbar} ${styles.active}`);
      // setLinkClasses((prev) => prev += ` ${styles.active}`);
      timer = setTimeout(() => {
        setLinkClasses((prev) => (prev += ` ${styles.active}`));
      }, 200);
    } else {
      clearTimeout(timer);
      // setNavOpen(false);
      setLinkClasses(`${styles['link-text']}`);
      setNavClasses(styles.navbar);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !navRef.current.contains(e.target) &&
        linkClasses !== `${styles['link-text']}`
      ) {
        setLinkClasses(`${styles['link-text']}`);
        setNavClasses(styles.navbar);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [navRef, linkClasses]);

  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
      <nav ref={navRef} className={navClasses}>
        {/* <div class="brand-title">Brand</div> */}
        <div onClick={handleClick} className={styles['toggle-button']}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <span className={styles.divider}></span>
        <ul className={styles['navbar-nav']}>
          {dummyLinks.map((link) => {
            return (
              <li key={link} className={styles['nav-item']}>
                <Link className={styles['nav-link']}>
                  <span className={styles['nav-icon']}>
                    {icons[dummyLinks.indexOf(link)]}
                  </span>
                  <span className={linkClasses}>{link}</span>
                </Link>
              </li>
            );
          })}
          <span className={styles.divider}></span>
        </ul>
      </nav>
    </IconContext.Provider>
  );
};

export default Nav;
