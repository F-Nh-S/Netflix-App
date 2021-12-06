import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"



const Header = () => {
    return (
        <header className="showcase">
            <div className="showcase-top">
                <img src="https://raw.githubusercontent.com/F-Nh-S/Netflix-App/gh-pages/images/NetflixBase.png" alt="logo" />
                {/* <Link to="/" className="btn btn-rounded">
                    
                </Link> */}

            </div>

            <div className="showcase-content">
                <h1>Unlimited Movies , TV Shows and more</h1>
                <p>NETFLIX CLONE VERSION </p>
                <Link to="/home" className="btn btn-x1">
                    Redirect to Wishlist Page
                    <i className="fas fa-chevron-right btn-icon"></i>
                </Link>
            </div>
        </header>
    )
}

export default Header
