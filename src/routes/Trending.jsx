import React from 'react'
import Header from '../components/Header'
import SimpleBottomNavigation from '../components/Nav'
import TrendingMain from '../components/TrendingMain'
import SingleContent from '../components/SingleContent'






function Trending() {
  return (
    <div>
      <Header />
      <SimpleBottomNavigation />
      <TrendingMain/>
      <SingleContent/>
    
    </div>
    
  )

}

export default Trending