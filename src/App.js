import React from 'react';
import './App.css';
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
        
        <Route exact path ='/entertainment' element={<Trending />}/>
        <Route exact path ='/Trending' element={<Trending/>}/>
        <Route exact path ='/movies' element={<Movies />}/>
        <Route exact path ='/series' element={<Series />}/>
        <Route exact path ='/search' element={<Search />}/>
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
