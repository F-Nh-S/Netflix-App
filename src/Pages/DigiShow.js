import {React , useEffect }from 'react'
import api from '../API/api'
import Banner from '../Components/Banner/Banner';
import Nav from '../Components/Nav/Nav';
import Row from '../Components/Row/Row'

const DigiShow = () => {
  useEffect(() => {
    document.title = "Netflix Home"
 }, []);
  
    return (
        <div>
          <Nav/>
          <Banner/>     
          <Row 
          title="NETFLIX ORIGINALS"
          fetchUrl={api.fetchNetflixOriginals}
          isLargeRow
          />
          <Row title="Trending Now" fetchUrl={api.fetchTrending}/>
          <Row title="Top Rated" fetchUrl={api.fetchTopRated}/>
          <Row title="Action Movies" fetchUrl={api.fetchActionMovies}/>
          <Row title="Comedy Movies" fetchUrl={api.fetchComedyMovies}/>
          <Row title="Horror Movies" fetchUrl={api.fetchHorrorMovies}/>
          <Row title="Romance Movies" fetchUrl={api.fetchRomanceMovies}/>
          <Row title="Documentaries" fetchUrl={api.fetchDocumentaries}/>
        </div>
    )
}

export default DigiShow
