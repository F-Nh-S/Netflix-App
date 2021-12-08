import React from 'react'
import { Link } from "react-router-dom"
import "./Header.css"
import NetflixBase from  "../Nav/NetflixBase.png"  



const Header = () => {
    return (
        <header className="showcase">
            <div className="showcase-top">
                <img src={NetflixBase} alt="logo" />
                {/* <Link to="/" className="btn btn-rounded">
                    
                </Link> */}

            </div>

            <div className="showcase-content">
                <h1>Unlimited Movies , TV Shows and more</h1>
                <p>NETFLIX CLONE VERSION </p>
                <Link to="/Netflix-App/home" className="btn btn-x1">
                    Redirect to Wishlist Page
                    <i className="fas fa-chevron-right btn-icon"></i>
                </Link>
            </div>
        </header>
    )
}

export default Header
