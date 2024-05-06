import React, { useEffect, useState } from "react";
import './Banner.css'
import instance from "../../axios";
import { imgUrl,trending } from "../../constants";



function Banner() {
    const [movie,Setmovie]=useState({})
    const [count,setCount]=useState(0);
    useEffect(()=>{
        instance.get(trending).then((response)=>{
            Setmovie(response.data.results[count]) 
            console.log(response.data.results[0])
        }).catch((error)=>console.log(error))
    },[count])
  return (
    <div 
    style={{backgroundImage:`url(${movie?imgUrl+movie.backdrop_path:""})`}}className="banner">
     <div className="container">
  <button className="carousel-button" onClick={() =>count>0? setCount(count - 1):setCount(0)}>&lt;</button>
  <div className="content">
    <h1 className="title">{movie.title}</h1>
    <div className="banner-buttons">
      <button className="button">Play</button>
      <button className="button">My list</button>
    </div>
    <h1 className="description">{movie.overview}</h1>
  </div>
  <button className="carousel-button" onClick={() => setCount(count + 1)}>&gt;</button>
</div>


      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
