import React from 'react';
import "./player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer"

function Player({ spotify }) {
  return (
    <div className='player'>
        <div className='player_body'>
            <Sidebar/>
            <Body spotify= {spotify}/>

        </div>

            <Footer/>



      <h1> welcome to spotify</h1>
    </div>
  )
}

export default Player
  