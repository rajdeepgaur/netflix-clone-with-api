import React, { useState, useEffect } from 'react';
import './row.css';
import axios from '../../axios';
import Youtube from "react-youtube";

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original/";

     // Options for react-youtube
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

    const handleClick = async (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          let trailerurl = await axios.get(
            `/movie/${movie.id}/videos?api_key=xxxxxxxxxxxxxxxx`
          );
          setTrailerUrl(trailerurl.data.results[0]?.key);
          console.log(movie)
        }
      };   

    return (
        <div className="row"> 
            <h2>{title}</h2>
        <div className="row__posters">
            {movies.map((movie) => (
                (( isLargeRow && movie.poster_path) ||
                ( !isLargeRow && movie.backdrop_path)) &&
                (
                <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleClick(movie)} />
                )
            ))}
            </div>            
            { trailerUrl && <Youtube videoId={trailerUrl} opts={opts} /> }
        </div>
        
    );
}

export default Row;
