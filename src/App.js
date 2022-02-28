import React from 'react';
import { HashRouter , Switch , Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import './Css/App.css';
import DigiShow from './Pages/DigiShow';
import Home from "./Pages/Home.js"
import WatchList from './Pages/WatchList';
import  WishList  from './Pages/WishList';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <ScrollToTop/>
      <Switch>
      <Route exact path="/Netflix-App" component={Home}/>
      <Route exact path="/" component={Home}/>
      <Route path="/Netflix-App/home" component={DigiShow}/>
      <Route path="/wishlist" component={WishList}/>
      <Route path="/watchlist" component={WatchList}/>
      </Switch>
      <Footer/>
    </div>
  
    </HashRouter>
  );
}

export default App;
