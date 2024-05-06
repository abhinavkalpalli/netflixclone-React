import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import { imgUrl,API_KEY } from "../../constants";
import instance from "../../axios";
import Youtube from 'react-youtube';

export default function Rowpost(props) {
  const [movie, SetMovie] = useState([]);
  const [urlId,setId]=useState('');
  const opts = {
    height: '100%',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleClick=(id)=>{
    instance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if(response.data.results[0].length!==0){
        setId(response.data.results[0])
        }
    }).catch((err)=>console.log(err))
  }
  useEffect(() => {
    instance.get(props.url).then((response) => {
      SetMovie(response.data.results);
    });
  },[props.url]);
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className='posters'>
        {movie.map((obj) => {
          return (
            <img
            onClick={()=>handleClick(obj.id)}
              src={`${imgUrl + obj.backdrop_path}`}
              className={props.isSmall?'smallposter':'poster'}
              alt="poster"
            />
          );
        })}
      </div>
      {urlId?<Youtube videoId={urlId.key} opts={opts} />:null}
    </div>
  );
}
