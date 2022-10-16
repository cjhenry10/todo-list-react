import React, { useContext, useState } from 'react';
import styles from './Todo.module.css';
import { BsCheckCircleFill, BsFillCircleFill, BsXLg } from 'react-icons/bs';
import { IoEllipsisVertical } from 'react-icons/io5';
import TodoContext from '../../context/todo-context';
import TodoDate from './TodoDate';

const Todo = (props) => {
  const { completedToggle, removeItem } = useContext(TodoContext);

  const [todoClasses, setTodoClasses] = useState(styles.todo);

  const [completedButton, setCompletedButton] = useState(<BsFillCircleFill />);

  const handleCheck = (title) => {
    if (todoClasses === styles.todo && !props.completed) {
      completedToggle(title);
      setTodoClasses((prev) => (prev += ` ${styles.completed}`));
      setCompletedButton(<BsCheckCircleFill />)
    } else {
      completedToggle(title);
      setTodoClasses(styles.todo);
      setCompletedButton(<BsFillCircleFill />)
    }
  };

  const handleRemove = (title) => {
    removeItem(title);
  }

  return (
    <div className={todoClasses}>
      <div className={styles['todo-text']}>
        <div className={styles['todo-info']}>
          <h3>{props.title}</h3>
          <p>{props.details}</p>
        </div>
        <div className={styles['todo-categories']}>
          <h4>{props.category}</h4>
          <p>{props.subcategory}</p>
        </div>
      </div>
      <div className={styles['todo-due']}>
        <TodoDate date={props.dueDate}/>
      </div>
      <div className={styles['todo-buttons']}>
        <button
          onClick={() => {
            handleCheck(props.title);
          }}
        >
          {completedButton}
        </button>
        <button onClick={()=>{handleRemove(props.title)}}>
          <BsXLg />
        </button>
        <button>
          <IoEllipsisVertical />
        </button>
      </div>
    </div>
  );
};

export default Todo;
