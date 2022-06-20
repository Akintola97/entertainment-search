import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from 'react-router-dom'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TheatersIcon from '@mui/icons-material/Theaters';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');
  const handleChange = (event, newValue) => {
    setValue(newValue); 
  };


  return (
    <BottomNavigation sx={{ width:'100%', position:'fixed', bottom:'0', zIndex:100, backgroundColor:'#2d313a'}} value={value} onChange={handleChange}>
      <BottomNavigationAction
      style={{color:'white'}}
        label="Trending"
        value="Trending"
        icon={<TrendingUpIcon />}
        to = "/trending"
        component ={Link}

      />
      <BottomNavigationAction
      style={{color:'white'}}
        label="Movies"
        value="Movies"
        icon={<TheatersIcon />}
        to = "/Movies"
        component ={Link}
      />
      <BottomNavigationAction
        style={{color:'white'}}
        label="Series"
        value="Series"
        icon={<TvIcon />}
        to = "/Series"
        component ={Link}
      />
      <BottomNavigationAction 
      style={{color:'white'}}
      label="Search"  
      value="Search"  
      icon={<SearchIcon />} 
      to = "/Search"
        component ={Link}
      />
    </BottomNavigation>
  );
}
