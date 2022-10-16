import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { BsFillBookmarksFill, BsFillBookmarkStarFill, BsCheckCircleFill } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';

const dummyLinks = ['Add Category', 'Add Subcategory', 'Add Task', ];
const icons = [
    <BsFillBookmarksFill size={24} />,
    <BsFillBookmarkStarFill size={24} />,
  <BsCheckCircleFill size={24} />,

];

const Nav = () => {
  const [navClasses, setNavClasses] = useState(`${styles.navbar}`);
  const [navLinkClasses, setNavLinkClasses] = useState(`${styles['navbar-links']}`)

  // let navLinkClasses = `${styles['navbar-links']}`

  const handleClick = () => {
    if (navClasses === `${styles.navbar}`) {
      setNavClasses((prev) => {
        return prev += ` ${styles['active-nav']}`;
      })
    }
    if (navLinkClasses === `${styles['navbar-links']}`) {
      setNavLinkClasses((prev) => {
        return prev += ` ${styles.active}`;
      });
      console.log('handleClick if');
      console.log(navLinkClasses);
    } else {
      setNavLinkClasses(`${styles['navbar-links']}`);
      console.log('handleClick else');
      console.log(navLinkClasses);
    }
    }

  return (
    <IconContext.Provider value={{ style: { verticalAlign: 'middle' }}}>
      <nav className={navClasses}>
        {/* <div class="brand-title">Brand</div> */}
        <div onClick={handleClick} className={styles['toggle-button']}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
        <span className={styles.divider}></span>
        <div className={styles['navbar-nav']}>
        <div className={navLinkClasses}>
          <ul>
            {dummyLinks.map((link) => {
              return (
                <div>
                <li key={link}>
                  <Link>
                    <span>{link}</span>
                    <span>{icons[dummyLinks.indexOf(link)]}</span>
                  </Link>
                </li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className={styles['navbar-icons']}>
        <ul>
            {icons.map(icon => {
                return (
                    <li key={icons.indexOf(icon)}>
                    <Link>
                    {icon}
                  </Link>
                  </li>
                )
            })}
          </ul>
        </div>
        </div>
        <span className={styles.divider}></span>
      </nav>
    </IconContext.Provider>
  );
};

export default Nav;
