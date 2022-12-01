import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BookList from './components/ListBooks';
import Categories from './components/categories';
import Navigation from './components/Navigate';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
