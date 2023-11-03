import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import  "./Body.css";
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import SongRow from './SongRow';


function Body( {spotify}) {
  const [{ discover_weekly}, dispatch] = useDataLayerValue()
  return (
    
    <div className='body'>
      <Header spotify= {spotify}/>


      <div className='body_info'>
        <img src={discover_weekly?.images[0].url} alt="" />
        
        <div className='body_infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description }</p>

        </div>

        <div className='boody_song'>
          <div className='body_icons'> 
          <PlayCircleFilledIcon className='body_shuffle'/>
          <FavoriteIcon className='large'/>
          <MoreHorizIcon/>

          </div>
          {discover_weekly?.tracks.items.map((item) =>{
            <SongRow track={item.track}/>
          })}
          
        </div>

      </div>


       
       
      
    </div>
  );
}

export default Body
