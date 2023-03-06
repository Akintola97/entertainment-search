 import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'





function header() {
  return (
    <Link to = '/entertainment'>
    <div onClick={() => window.scroll(0,0)}  className='title'>Entertainment Center 🍿</div>
    </Link>

  )
}

export default header 