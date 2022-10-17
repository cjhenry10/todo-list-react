import { useState } from 'react';
import Nav from './components/Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
import TodoList from './components/Todos/TodoList';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryList from './components/Categories/CategoryList';
import SubcategoryList from './components/Subcategories/SubcategoryList';
import Modal from './components/Modal/Modal';
import TodoContextProvider from './context/TodoContextProvider';
import Card from './components/UI/Card';
import AddTodo from './components/Todos/AddTodo';

function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <BrowserRouter>
    <TodoContextProvider>
    {showModal && <Modal {...{setShowModal}}>
      <AddTodo {...{setShowModal}}/>
      </Modal>}
    <Nav {...{setShowModal}}/>
    <SearchBar />
    <CategoryList />
    <SubcategoryList />
    <TodoList />
    {/* <Modal /> */}
    </TodoContextProvider>
    </BrowserRouter>
  );
}

export default App;
