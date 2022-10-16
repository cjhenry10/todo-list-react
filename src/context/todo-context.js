import React from 'react';


const TodoContext = React.createContext({
    tasks: [{
        title: '',
        details: '',
        dueDate: null,
        priority: 0,
        completed: false,
    }],
    shownTasks: [],
    categories: [],
    subcategories: [],
    addItem: (item) => {},
    removeItem: (title) => {},
    completedToggle: (title) => {}
})

export default TodoContext