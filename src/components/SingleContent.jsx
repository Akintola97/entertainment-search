import React from 'react'
import { Badge } from '@mui/material'
import './SingleContent.css'
import { img_300 } from "../assets/config"

export const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
   <>
    <div className='mediaContent text-center'>
      <Badge  badgeContent={vote_average} color={vote_average > 6 ? 'primary' : 'secondary'}/>
      <img className='contentPoster' src={`${img_300}${poster}`} alt={title} />
      <h5 className='contentTitle text-sm text-center'>{title}</h5>
      <p className='screenType text-sm text-center'>{media_type ==='tv' ? 'TV Series' : "Movie"} </p>
        <p className='contentDate text-sm text-center pb-5'>{date}</p>
      </div>
   </>
   
    
  )
}

export default SingleContent




