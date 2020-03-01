import React, { Component } from 'react';
import {Redirect ,Link} from 'react-router-dom';
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";
class Header2 extends Component {


    render() {
        return (

            <>
                <header className="header header-animated opaque" style={{ "display": 'block', "paddingTop": "5px", "paddingBottom": "5px" }}>
                    <div className="container">
                        <nav className="navbar navbar-default" role="navigation">
                            
                            <div className="navbar-collapse collapse in" id="navbarMain" aria-expanded="true" style={{ top: "65px" }}>
                            <ul className="nav navbar-nav navbar-left">
                                <li><h1> 
                                    <span>To Do</span> List
                                     </h1></li>
                                </ul>

                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                    <Link to='./App1'>
                                        <button className="btn btn-primary-outline" id="logout"/* onClick={}*/>Logout</button>
                                        </Link>
                                    </li>
                                </ul>
                              
                            </div>
                        </nav>
                    </div>
                </header>
                
            </>

        );
    }
}



export default Header2