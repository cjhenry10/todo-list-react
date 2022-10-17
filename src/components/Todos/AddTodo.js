import React, { useContext, useRef } from 'react';
import TodoContext from '../../context/todo-context';
import Input from '../Inputs/Input';
import SelectList from '../Inputs/SelectList';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddTodo.module.css';

const testCategories = ['Work', 'School', 'Life'];

const AddTodo = ({ setShowModal }) => {
  const titleRef = useRef();
  const detailRef = useRef();
  const dueDateRef = useRef();
  const priorityRef = useRef();
  const categoryRef = useRef();
  const subcategoryRef = useRef();

  const ctx = useContext(TodoContext);

  const handleClose = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
        title: titleRef.current.value,
        detail: detailRef.current.value,
        dueDate: new Date(dueDateRef.current.value),
        priority: priorityRef.current.value,
        category: categoryRef.current.value,
        subcategory: subcategoryRef.current.value,
    }
    console.log(newTask);
    ctx.addItem(newTask);
    setShowModal(false);
  };

  return (
    <Card>
      <form onSubmit={handleAddTask}>
        <div className={styles['add-todo']}>
          <Input
            ref={titleRef}
            label='Title'
            input={{ type: 'text', id: 'task-name' }}
          />
          <SelectList ref={priorityRef} label='Priority' options={testCategories} />
          <Input
            ref={detailRef}
            label='Details'
            input={{ type: 'textarea', id: 'task-name' }}
          />
          <SelectList ref={categoryRef} label='Category' options={testCategories} />
          <Input
            ref={dueDateRef}
            label='Due Date'
            input={{ type: 'date', id: 'task-name' }}
          />
          <SelectList ref={subcategoryRef} label='Subcategory' options={testCategories} />
          <div className={styles.controls}>
            <Button
              onClick={handleClose}
              variant='text'
              button={{ type: 'button' }}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              button={{ type: 'submit' }}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default AddTodo;
