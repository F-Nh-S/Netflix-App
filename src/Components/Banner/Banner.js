import { React, useEffect, useState } from 'react'
import axios from "axios"
import "./Banner.css"
import api from '../../API/api'
import { Link } from "react-router-dom"

const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API}${api.fetchNetflixOriginals}`)
            setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length - 1)])
            return response
        }
        fetchData()
    },[])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>
            <div className="banner-contents">
                <h1 className="banner-title">
                    {movie?.title || movie?.name || movie?.originam_name}
                </h1>
                <div className="banner-buttons">
                <Link to="/watchlist"> <button className="banner-button"><i className="fas fa-eye"></i> Watched List</button> </Link>
                <Link to="/wishlist">   <button className="banner-button"><i className="fas fa-heart"></i> Wish List</button> </Link>
                </div>
                <h1 className="banner-description">{truncate(movie?.overview,150)}</h1>
            </div>
            <div className="banner-fadeBottom"></div>
        </header>
    )
}

export default Banner
