import React from 'react';
import './App.css';
import Header from './component/Header';
import Movielist from './component/Movielist';
import Addmovie from './component/Addmovie';
import HOC from "./component/HOC"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Description from "./component/Description"

const App = () => {
  return ( <Router>
      <Route path="/" render={()=><Header/>}/>
      <Route path ="/" component ={Addmovie}/>
      <Route  exact path ='/' component ={Movielist}/>
      <Route path ="/Description/:id" component ={Description}/>
      </Router>);
}


export default HOC(App);