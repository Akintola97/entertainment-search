import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Chip from '@mui/material/Chip';

const Genres = ({
    type,
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    setPage,
}) => {

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_KEY}&language=en-US`
      );

      setGenres(data.genres);
      };

      console.log(genres)
    
      useEffect (() => {
        fetchGenres();

        return () => {
          setGenres({});
        };
        // eslint-disable-next-line 
      }, []);


      return (
        <div>
       {genres.map((genre) => (
         <Chip label = {genre.name} />
       ))}
     
    </div>
  )
};

export default Genres