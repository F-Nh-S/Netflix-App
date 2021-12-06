import {React , useEffect }from 'react'
import Nav from '../Components/Nav/Nav';

const WatchList = () => {
    useEffect(() => {
        document.title = "Netflix Watchlist"
     }, []);
    return (
        <div>
              <Nav/>
              
        </div>
    )
}


export default WatchList
