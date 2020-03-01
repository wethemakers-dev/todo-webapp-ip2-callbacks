import React from 'react';
import App2 from "./App2";
import App1 from "./App1";
import {BrowserRouter as Router, Switch ,Route,Redirect} from "react-router-dom";
export const App= () =>(
  
    <div className="App">
       <Router>
       <Switch>
       <Route path="/App2" component={App2}/>
       <Route path="/" component={App1}/>
       <Route path="/App2" component={App2}/>
        <Redirect to = {{ pathname: "/home" }} />;
       </Switch>
       </Router>
    </div>
  );
