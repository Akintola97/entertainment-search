import React from 'react'
import './SearchMain.css'
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from 'axios';
import SingleContent from './SingleContent';
import CustomPagination from './CustomPagination';




const SearchMain = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([])
  // eslint-disable-next-line
  const [numOfPages, setNumOfPages] = useState()

  const fetchSearch = async (event) => {
    event.preventDefault();
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type ? 'tv' : 'movie'}?api_key=${process.env.REACT_APP_KEY}&languages=en-US&query=${searchText}&page=${page}&include_adult=false`);

  

  setContent(data.results);
  setNumOfPages(data.total_pages);

}

useEffect(()=> {
  window.scroll(0,0);
  fetchSearch();
  // eslint-disable-next-line 
}, [type, page]);



  return (
   <>
   <form onSubmit={fetchSearch}>
    <div className='search justify-center text-center w-full'>
      
      <TextField id="standard-basic" label="Search" variant="standard" 
      onChange={(e) => setSearchText(e.target.value)}
      />
      
      <Button variant="text" onClick={fetchSearch} ><SearchIcon /></Button>
      
</div>
<div className='flex justify-center w-full'>
<Tabs value ={type} indicatorColor='secondary' textColor='primary' 
onChange={(event, newValue)=>{
  setType(newValue); setPage(1);
}}>
  <Tab className='w-2/4' label='Movies'/>
  <Tab className='w-2/4' label='TV Series'/>
</Tabs>
</div>

<div className='SearchPage text-center'>
    <div className='SearchContent flex flex-wrap justify-around pt-5 w-full'>
      {content && content.map((c) =>
        <SingleContent 
        key={c.id} 
        id={c.id} 
        poster={c.poster_path} 
        title={c.title || c.name} 
        date={c.first_air_date || c.release_date}
        media_type={type ? 'tv' : 'movie'}
        vote_average={c.vote_average}
        />
       
      )}
       
    </div>
  
    <CustomPagination setPage={setPage}/>  
    
    </div>

    </form>
</>

  )
}

export default SearchMain;


