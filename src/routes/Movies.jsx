import React from 'react'
import Header from '../components/Header'
import MoviesMain from '../components/MoviesMain'
import SimpleBottomNavigation from '../components/Nav'



function Movies() {
  return (
    <div>
      <Header />
      <SimpleBottomNavigation />
      <MoviesMain />

    </div>

  )
}

export default Movies

