import React, { useContext } from 'react';
import styles from './TodoList.module.css';
import Todo from './Todo';
import TodoContext from '../../context/todo-context';


const TodoList = () => {
  const {tasks} = useContext(TodoContext);
  return (
    <main className={styles['todo-list']}>
        <ul>
            {tasks.map(todo => {
              return (
                <Todo
                key={todo.title}
                title={todo.title}
                details={todo.details}
                dueDate={todo.dueDate}
                priority={todo.priority}
                completed={todo.completed}
                category={todo.category}
                subcategory={todo.subcategory}
                />
              )
            })}
        </ul>
    </main>
  )
}

export default TodoList