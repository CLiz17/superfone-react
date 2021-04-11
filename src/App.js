import React from "react";
import Features from "./Features";
import Teams from "./Teams";
import Pricing from "./Pricing";
import Integrations from "./Integrations";
import Blog from "./Blog";
import Navbar from "./Navbar";
import './App.css';
import { Switch, Route,Redirect } from "react-router-dom";

const App = () => {
  return(
    <>
     <Navbar/>
       <Switch>
         <Route exact path="/Features" component={Features} />
         <Route exact path="/Teams" component={Teams} />
         <Route exact path="/Pricing" component={Pricing} />
         <Route exact path="/" component={Integrations} />
         <Route exact path="/Blog" component={Blog} />
         <Redirect to="/" />
       </Switch>
    </>
  );
};

export default App;
