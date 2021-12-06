import {React , useEffect }from 'react'
import Nav from '../Components/Nav/Nav';

const WishList = () => {
    useEffect(() => {
        document.title = "Netflix Wishlist"
     }, []);
    return (
        <div>
              <Nav/>
              
        </div>
    )
}


export default WishList
