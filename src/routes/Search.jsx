import React from 'react'
import Header from '../components/Header'
import SimpleBottomNavigation from '../components/Nav'
import SearchMain from '../components/SearchMain'
import SingleContent from '../components/SingleContent'



function Search() {
  return (
    <div>
      <Header />
      <SimpleBottomNavigation />
      <SearchMain />
      <SingleContent />
     
    </div>
  )
}

export default Search