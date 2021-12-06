import axios from 'axios'
import { React, useState, useEffect } from 'react'
import "./Row.css"



const baseurl = "https://image.tmdb.org/t/p/original"

const Row = ({ title, fetchUrl, isLargeRow }) => {
  
    const fetchurl = fetchUrl
    const [movies, setMovies] = useState([]) 
    useEffect(() => {
        const fetchData = async () => {
        
            await axios.get(process.env.REACT_APP_API+fetchurl).then(response => {
            
            setMovies(response.data.results);
            
            return response
            
        })
         
        }
        fetchData()
        
    }, [fetchurl])
  

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row-posters">
                {movies && movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                        src={`${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
           
            
            
        </div>
    )
}

export default Row
