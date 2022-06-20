import axios from 'axios'
import React, { useEffect } from 'react'
import {useState} from 'react';
import SingleContent from './SingleContent';
import './TrendingMain.css'


function Trending_Main() {
  const [content, setContent] = useState([]);


  const fetchTrending = async () => {
    const { data } =await axios.get(`
    https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_KEY}`
    );

  console.log(data);

  setContent(data.results);

  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <>
    <div className='trending'>Trending Main</div>
    <div className='trendingContent'>
      {content && content.map((c) =>
        <SingleContent key={c.id}/>
      )}
    </div>
    </>
  )
}

export default Trending_Main