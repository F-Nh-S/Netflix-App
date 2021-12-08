import { React, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import "./Nav.css"
import NetflixBase from  "./NetflixBase.png"  
import NetflixAvatar from  "./NetflixAvatar.png"  


const Nav = () => {
    const [show, setShow] = useState(false)

    const NavBarVisibility = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", NavBarVisibility)

        return () => {
            window.removeEventListener("scroll", NavBarVisibility)
        }
    }, [])
    return (
        <div className={`nav ${show && "nav-black"}`}>
            <Link to="/home">
                <img src={NetflixBase} className="nav-logo" alt="logo" />
            </Link>
            <img src={NetflixAvatar} className="nav-avatar" alt="logo" />
        </div>
    )
}

export default Nav
