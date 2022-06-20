import React from 'react'
import Header from '../components/Header'
import SimpleBottomNavigation from '../components/Nav'
import Home from '../components/Home'
import Trending_Main from '../components/Trending_Main'




function Trending() {
  return (
    <div>
      <Header />
      <SimpleBottomNavigation />
      <Trending_Main/>
    </div>
  )
}

export default Trending