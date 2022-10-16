import Nav from './components/Nav/Nav';
import { BrowserRouter } from 'react-router-dom';
import TodoList from './components/Todos/TodoList';
import SearchBar from './components/SearchBar/SearchBar';
import CategoryList from './components/Categories/CategoryList';
import SubcategoryList from './components/Subcategories/SubcategoryList';
// import Modal from './components/Modal/Modal';
import TodoContextProvider from './context/TodoContextProvider';

function App() {
  return (
    <BrowserRouter>
    <Nav />
    <TodoContextProvider>
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
