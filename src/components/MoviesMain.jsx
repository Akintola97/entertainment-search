import React, { useEffect, useState } from 'react'
import './MoviesMain.css'
import axios from 'axios';
import CustomPagination from './CustomPagination';
import SingleContent from './SingleContent';
import Genres from './Genres';
import pickGenre from './hooks/pickGenre'


const MoviesMain = () => {

  const [page, setPage] = useState(1)
  const [content, setContent] = useState([])
  const [numOfPages, setNumOfPages] = useState()
  const [selectedGenres, setSelectedGenres] = useState([])
  const [genres, setGenres] = useState([])
  const genreforURL = pickGenre(selectedGenres)


  const fetchMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
  
    setContent(data.results)
    setNumOfPages(data.total_pages);

  };

useEffect(() => {
  fetchMovies();
  // eslint-disable-next-line
});



  return (
    <>
    <div className='movies text-center'> MOVIES
    <Genres
    type = 'movie' 
    selectedGenres = {selectedGenres} 
    setSelectedGenres={setSelectedGenres} 
    genres = {genres}
    setGenres={setGenres}
    setPage={setPage}
    

    
    />
    
    <div className='moviesContent flex flex-wrap justify-around pt-5  w-full'>

     {content && content.map((c) =>
        <SingleContent 
        key={c.id} 
        id={c.id} 
        poster={c.poster_path} 
        title={c.title || c.name} 
        date={c.first_air_date || c.release_date}
        media_type='movies'
        vote_average={c.vote_average}
        />
     )}
     </div>
  
     <CustomPagination setPage={setPage} numOfPages={numOfPages} />
     </div>
    
  
 
    </>
  )
}

export default MoviesMain

