import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Error from './components/Error';
import Artists from './pages/Artists';
import Albums from './pages/Albums';
import Genres from './pages/Genres';
import Album from './pages/Albums/albums';
import Genre from './pages/Genres/genre';
import Artist from './pages/Artists/artist';
import Search from './pages/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/artists' element={<Artists />} />
          <Route path='/artists/:nbr' element={<Artist />} />
          <Route path='/albums' element={<Albums />} />
          <Route path='/albums/:nbr' element={<Album />} />
          <Route path='/genres' element={<Genres />} />
          <Route path='/genres/:nbr' element={<Genre />} />
          <Route path='/search' element={<Search />} />
          <Route path='/*' element={<Error />} />
        </Routes>
    </Router>
  </React.StrictMode>
);

