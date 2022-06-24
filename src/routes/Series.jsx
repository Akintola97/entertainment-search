import React from 'react'
import Header from '../components/Header'
import SimpleBottomNavigation from '../components/Nav'
import SeriesMain from '../components/SeriesMain'
import SingleContent from '../components/SingleContent'



function Series() {
  return (
    <div>
      <Header />
      <SimpleBottomNavigation />
      <SeriesMain />
      <SingleContent />
    </div>
  )
}

export default Series