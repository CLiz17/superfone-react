import React from "react";
import Integration from "./Integration";
import Navbar from "./Navbar"
import './App.css';
import { Switch, Route,Redirect } from "react-router-dom";

const App = () => {
  return(
    <>
       <Switch>
         <Navbar/>
         <Route exact path="/" component={Integration} />
         <Redirect to="/" />
       </Switch>
    </>
  );
};

export default App;
