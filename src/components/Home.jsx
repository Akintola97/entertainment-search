import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import SimpleBottomNavigation from './Nav'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Trending from '../routes/Trending'
import Movies from '../routes/Movies'
import Series from '../routes/Series'
import Search from '../routes/Search'


function Home() {
  return (
    <div>
    <Header />
    <Main />
    <SimpleBottomNavigation />
    <container>
      <switch>
        <Route path='/' component={Trending} exact/>
        <Route path='/movies' component={Movies}/>
        <Route path='/series' component={Series}/>
        <Route path='/search' component={Search}/>
      
      </switch>
    </container>

    </div>

  )
}

export default Home