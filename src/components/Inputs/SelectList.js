import React from 'react';
import styles from './SelectList.module.css';

const SelectList = React.forwardRef((props, ref) => {
  return (
    <>
        <div className={styles.select}>
            {/* <input name={props.label} list={props.label}/> */}
            <label>{props.label}</label>
            <select id={props.label} ref={ref} defaultValue='-'>
                <option value='-' disabled>-</option>
                {props.options && props.options.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    </>
  )
})

export default SelectList