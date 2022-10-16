import React, {useReducer} from 'react';
import TodoContext from './todo-context';

const testTodos = [{
    title: 'test todo',
    details: 'asdf',
    dueDate: new Date(2022, 8, 24),
    priority: 0,
    completed: false,
    category: 'kdhgdg',
    subcategory: 'kdhiovmcds'
},
{
  title: 'test todo 2',
  details: 'dsklufghsduijfvnjfkd',
  dueDate: new Date(2022, 8, 20),
  priority: 0,
  completed: false,
  category: 'kdhgdg',
  subcategory: 'kdhiovmcds'
},];

const testCategories = ['Category1', 'Category2'];
const testSubcategories = ['subcategory1', 'subcategory2'];

const defaultTodoState = {
    tasks: testTodos,
    shownTasks: [],
    categories: testCategories,
    subcategories: testSubcategories,
}

const todoReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTodos = [...state.tasks, action.task];
        return {...state, tasks: updatedTodos}
    }
    if (action.type === 'REMOVE') {
        const indexToRemove = state.tasks.findIndex((task) => {
            return task.title === action.title
        })
        const todoToRemove = state.tasks[indexToRemove];
        const updatedTodos = state.tasks.filter((task) => {
            return task.title !== todoToRemove.title
        })
        return {...state, tasks: updatedTodos}
    }
    if (action.type === 'TOGGLE') {
        const indexToToggle = state.tasks.findIndex((task) => {
            return task.title === action.title;
        })
        const updatedItems = [...state.tasks];
        let itemToUpdate = updatedItems[indexToToggle];
        itemToUpdate = {...itemToUpdate, completed: !state.tasks[indexToToggle].completed}
        updatedItems[indexToToggle] = itemToUpdate;
        return {...state, tasks: updatedItems}
    }
    return defaultTodoState;
}



const TodoContextProvider = (props) => {
    const [todoListState, dispatchTodoAction] = useReducer(todoReducer, defaultTodoState);

    const handleAddTask = (task) => {
        dispatchTodoAction({type: 'ADD', task: task})
    }
    
    const handleRemoveTask = (title) => {
        dispatchTodoAction({type: 'REMOVE', title: title})
    }

    const handleToggle = (title) => {
        dispatchTodoAction({type: 'TOGGLE', title: title});
    }

    const todoContext = {
        tasks: todoListState.tasks,
        shownTasks: todoListState.shownTasks,
        categories: todoListState.categories,
        subcategories: todoListState.subcategories,
        addItem: handleAddTask,
        removeItem: handleRemoveTask,
        completedToggle: handleToggle,
    }
  return (
    <TodoContext.Provider value={todoContext}>{props.children}</TodoContext.Provider>
  )
}

export default TodoContextProvider