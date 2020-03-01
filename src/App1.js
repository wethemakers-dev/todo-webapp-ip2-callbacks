import React from 'react';
import Header from './Header';
import IndexContent from './IndexContent';
import {Footer} from './Footer';
import App2 from "./App2";
import {BrowserRouter, Route} from "react-router-dom";
const App1= () =>(
    <div className="App">
       <Header/>
       <IndexContent/>
       <Footer/>
    </div>
  );
export default App1