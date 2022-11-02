import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import BookList from './components/BookList';
import BookAdd from './components/BookAdd';
import BookEdit from './components/BookEdit';

function App() {
  return (
    <div className="container">
      <h1>Gestion des livres v2</h1>
      <Routes>
        <Route path='/books' exact element={<BookList />} />
        <Route path='/books/add' element={<BookAdd />} />
        <Route path='/books/edit/:id' element={<BookEdit />} />
        <Route
          path='/'
          exact
          element={<Navigate to="/books" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
