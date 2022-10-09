import React from 'react';
import { useState } from 'react';
import { fetchData } from '../services/services';
const Link = ({setLink , link, setShortLink}) => {
   
  return (
    <div className="link-container">
    <input type="text" className="input-link" 
     placeholder="Paste your link here"
     value={link}
     onChange={(e)=>{setLink(e.target.value)}}/>

    <button className="btn"
    onClick={()=>{
      fetchData({link,setShortLink});
    }}
    
    
    >Submit </button>
     </div>
  )

}

export default Link