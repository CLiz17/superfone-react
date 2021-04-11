import React from "react";
import Features from "./pages/Features";
import Teams from "./pages/Teams";
import Pricing from "./pages/Pricing";
import Integrations from "./pages/Integrations";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
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
