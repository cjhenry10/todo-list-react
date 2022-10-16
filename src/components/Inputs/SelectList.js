import React from 'react';

const SelectList = (props) => {
  return (
    <>
        <div><label>{props.label}</label></div>
        <div>
            <input name={props.label} list={props.label}/>
            <datalist id={props.label}>
                {props.options.map(option => <option>{option}</option>)}
            </datalist>
        </div>
    </>
  )
}

export default SelectList