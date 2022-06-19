import React from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './routes/Movies'
import Series from './routes/Series'
import Search from './routes/Search'
import Trending from './routes/Trending'




function App() {
  return (
    <BrowserRouter>
    <div className='app'>
      <Routes>
        <Route path ='/' element={<Home />}/>
        <Route path ='/Trending' element={<Trending/>}/>
        <Route path ='/movies' element={<Movies />}/>
        <Route path ='/series' element={<Series />}/>
        <Route path ='/search' element={<Search />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
